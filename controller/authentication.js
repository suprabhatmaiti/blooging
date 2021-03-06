const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const format = require("../format-response");
const con = require("../database/connection");
module.exports = {
  signup: (req, res) => {
    const {
      email,
      first_name,
      last_name,
      gender,
      password,
      address,
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const sql = `
        insert into user
        (email, first_name, last_name, gender, password, address)
        values
        ("${email}", "${first_name}", "${last_name}", '${gender}', "${hashedPassword}", "${address}")
        `;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(409).json(format.error("User already exist", 409));
      }
      return res.send(format.success(result, "Successfully user created"));
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;
    const sql = `
      select password, first_name, last_name, gender
      from user
      where email = '${email}'
      `;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json(format.error("Server error", 409));
      }
      if (!result.length) {
        return res
          .status(401)
          .json(format.error("User not found try signup", 401));
      }
      const isPasswordValid = bcrypt.compareSync(password, result[0].password);
      if (!isPasswordValid) {
        return res.status(401).json(format.error("Invalid Password", 401));
      }
      var token = jwt.sign({ email: email }, process.env.SECRET, {
        expiresIn: 86400, // expires in 24 hours
      });
      const { first_name, last_name, gender } = result[0];
      return res.send(
        format.success(
          { email, first_name, last_name, gender, token },
          "Successfully authenticated"
        )
      );
    });
  },
};
