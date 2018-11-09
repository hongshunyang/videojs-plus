import { browser } from "video.js";

let logType = "";

try {
  logType = localStorage && localStorage.getItem("vjs-plus-log");
} catch (e) {}

const log = (function() {
  if (logType === "normal" || browser.IE_VERSION) {
    // log without style
    return console.info.bind(console, "[VJS Plus]:");
  } else if (logType) {
    // log with style
    return console.info.bind(console, "%c[VJS Plus]:", "font-weight: bold; color:#2196F3;");
  } else {
    return function() {};
  }
})();

export default log;