const log = {};

// log errors
log.err = (head, title, body) => {
  let toLog = `![${head.toUpperCase()}] ${title}: ${body || ''}`;
  console.error(toLog);
};

// log status
log.log = (head, title) => {
  let toLog = `[${head.toUpperCase()}] ${title}`;
  console.log(toLog);
};


module.exports = log;
