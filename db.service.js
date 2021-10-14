const db = new Sequelize("SRO_VT_ACCOUNT", null, null, {
  dialect: "mssql",
  dialectOptions: {
    authentication: {
      type: "ntlm",
      options: {
        domain: "209.145.55.93",
        userName: "sa",
        password: "20480762Da",
      },
    },
    options: {
      instanceName: "SQLEXPRESS",
    },
  },
});

module.exports = db;
