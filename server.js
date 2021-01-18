const express = require("express");
const { emailerRoute } = require("./routes/emailer");
const { handleError } = require("./middleware/error");
const { cors } = require("./middleware/auth");
const { sources, originWhiteList } = require("./config");

const app = express();

app.use(express.static(sources.CLIENT_PATH), express.json());
app.use("/api/emailer", cors(originWhiteList), emailerRoute);
app.get("*", (req, res) => res.sendFile(sources.CLIENT_HTML));
app.use(handleError);

module.exports.app = app;
