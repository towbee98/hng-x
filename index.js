require("dotenv").config({ path: ".env" });
const moment = require("moment");
const express = require("express");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/api", (req, res, next) => {
  const { slack_name, track } = req.query;
  return res.status(200).json({
    slack_name: slack_name || "",
    current_day: moment().format("dddd"),
    utc_time: moment().utc(),
    track: track || "",
    github_file_url: "https://github.com/towbee98/hng-x/blob/main/index.js",
    github_repo_url: "https://github.com/towbee98/hng-x",
    status_code: 200,
  });
});
app.get("*", (req, res, next) => {
  res.status(404).json({ status_code: 404, message: "page not found" });
});
app.listen(PORT, () => {
  console.log("Server running at", PORT);
});
