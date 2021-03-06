const bcrypt = require("bcryptjs");
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
    console.log(hashedPassword);
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
};
