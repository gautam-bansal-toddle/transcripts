import ncp from "ncp";

const copyToNodeModules = () => {
  const PDF_GEN_ROUTE = process.env.PDF_GEN_ROUTE;
  const WEB_APP_ROUTE = process.env.WEB_APP_ROUTE;

  const isWebProject = process.env.CURRENT_PROJECT === "web";
  const isPdfProject = process.env.CURRENT_PROJECT === "pdf";

  const projectPath = isWebProject
    ? WEB_APP_ROUTE
    : isPdfProject
    ? PDF_GEN_ROUTE
    : null;
  const srcLocation = "./build/.";

  console.log(`Project Path: ${projectPath}`);

  if (projectPath) {
    ncp(
      srcLocation,
      `${projectPath}/node_modules/@gautam-bansal-toddle/transcripts/build`,
      (err) => {
        if (err) {
          // Even on error, the 'exit' event will fire and clean up the lock file.
          return console.error(err);
        }
        console.log(`Copied build files to ${projectPath}`);
      }
    );
  }
};

// Now, we run the copy function, protected by our lock file mechanism.
copyToNodeModules();
