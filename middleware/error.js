const errParse = (err, req, res, next) => {
  let response = {
    success: false,
    error: err.message || 'Internal server error'
  };
  return res.json(response);
};


module.exports = errParse;
