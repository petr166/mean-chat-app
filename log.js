const log = {};


// print errors
log.report = (head, title, body) => {
  head = head.toUpperCase();
  let heading = `[${head}] ${title}:`;
  console.error(heading);

  if (body && body.length > 0) {
    console.error(body);
  }
};


// log status
log.log = (head, title) => {
  head = head.toUpperCase();
  let heading = `[${head}] ${title}`;
  console.log(heading);
};


module.exports = log;
