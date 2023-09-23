const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
  endpoint: process.env.DYNAMO_URL,
});

module.exports = AWS;
