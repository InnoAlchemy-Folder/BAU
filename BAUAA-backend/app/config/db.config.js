module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "bau",
  dialect: "mysql",
  pool: {
    max: 1000,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
