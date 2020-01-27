const merge = require("merge");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],

  globals: {
    test_url: `http://${process.env.HOST || "127.0.0.1"}:${process.env.PORT ||
      5000}`
  }
};
