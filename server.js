const user = "sa";
const password = "20480762Da";
const server = "209.145.55.93";
const db = "SRO_VT_ACCOUNT";
const port = 1433;

// const user = process.env.USER;
// const password = process.env.PASSWORD;
// const server = process.env.SERVER;
// const db = process.env.DATABASE;
// const port = process.env.PORT;

const db = new (require("rest-mssql-nodejs"))({
  user: user,
  password: password,
  server: server,
  database: db,
  port: port,
  options: {
    encrypt: true,
  },
});

module.exports = {
  db,
};
