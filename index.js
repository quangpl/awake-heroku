const { DEFAULT_TIME, MAX_TIME } = require("./util/constant");
const axios = require("axios");

class Heroku {
  constructor(appName, time = DEFAULT_TIME) {
    this.appName = appName;
    this.time = time;
    this.interval = undefined;
  }
  start() {
      if (!this.appName) {
        console.error(
          "Your app name is invalid. Please declare it in constructor of awake-heroku"
        );
        return false;
      }
      if (this.time >= MAX_TIME) {
        console.error("Your period time must <1 800 000 millisecond");
      }
      console.log("\x1b[36m%s\x1b[0m", `Your app name : ${this.appName}`);

      console.log(
        "\x1b[36m%s\x1b[0m",
        `Period time want wakeup : ${this.time} millisecond`
      );
      this.interval = setInterval(async () => {
        try {
          await axios.get(`https://${this.appName}.herokuapp.com`);
          console.log(
            "\x1b[33m%s\x1b[0m",
            "[Awake-Heroku] : Your app has been get up"
          );
        } catch (e) {
          console.error("Your app name is invalid");
        }
      }, this.time);
  }

  setAppName(name) {
    this.appName = name;
  }
  setTime(time) {
    this.time = time;
  }

  stop() {
    clearInterval(this.time);
  }
}

module.exports = Heroku;
