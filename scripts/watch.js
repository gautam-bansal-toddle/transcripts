import config from "./config.js";
import ncp from "ncp";

const { PDF_GEN_ROUTE, WEB_APP_ROUTE } = config;

const isWebProject = process.env.CURRENT_PROJECT === "web";
const isPdfProject = process.env.CURRENT_PROJECT === "pdf";

const projectPath = isWebProject
  ? WEB_APP_ROUTE
  : isPdfProject
  ? PDF_GEN_ROUTE
  : null;
const srcLocation = "./build/.";

if (projectPath) {
  ncp(
    srcLocation,
    `${projectPath}/node_modules/@gautam-bansal-toddle/transcripts/build`,
    (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`Copied build files to ${projectPath}`);
    }
  );
}
