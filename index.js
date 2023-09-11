require("dotenv").config({ path: ".env" });
const moment = require("moment");
const express = require("express");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.get("/", (req, res, next) => {
  const { slack_name, track } = req.query;

  return res.status(200).json({
    status_code: 200,
    current_day: moment().format("dddd"),
    utc_time: moment().utc(),
    track: "backend",
    github_file_url: "",
    github_repo_url: "",
    slack_name: "Towbee",
  });
});
app.listen(PORT, () => {
  console.log("Server running at", PORT);
});
