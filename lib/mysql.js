const mysql = require("serverless-mysql")({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABSE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});

export default mysql;