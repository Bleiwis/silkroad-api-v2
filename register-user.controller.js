// const { db } = require("../../services/server");

const user = "sa";
const password = "20480762Da";
const server = "209.145.55.93";
const database = "SRO_VT_ACCOUNT";
const port = 1433;
const md5 = require('md5');
// const user = process.env.USER;
// const password = process.env.PASSWORD;
// const server = process.env.SERVER;
// const db = process.env.DATABASE;
// const port = process.env.PORT;

const db = new (require("rest-mssql-nodejs"))({
  user: user,
  password: password,
  server: server,
  database: database,
  port: port,
  options: {
    encrypt: true,
  },
});

const register_user = async (req, res) => {
  console.log(req.body);
  const prueba = await db.executeQuery(
    "INSERT INTO TB_User (StrUserID, password) VALUES (@user, @password)",
    [
      {
        name: "user",
        type: "varchar",
        value: req.body.user,
      },
      {
        name: "password",
        type: "varchar",
        value: md5(req.body.password),
      },
    ]
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(prueba);
};

module.exports = register_user;
