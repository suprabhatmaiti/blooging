module.exports = {
  error: (message, code, data = null) => ({
    message,
    code,
    data,
    status: "ERROR",
  }),
  success: (data, message = "", code = 200) => ({
    data,
    status: "OK",
    code,
    message,
  }),
};
