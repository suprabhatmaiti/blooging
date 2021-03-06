module.exports = {
  error: (message, code, data = null) => ({
    message,
    code,
    data,
    status: "ERROR",
  }),
  success: (data, code = 200, message = "") => ({
    data,
    status: "OK",
    code,
    message,
  }),
};
