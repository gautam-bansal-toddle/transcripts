import { spawn, spawnSync } from "child_process";

function execute(commands, sync) {
  if (typeof commands === "string") {
    commands = [commands];
  }
  if (!Array.isArray(commands)) {
    throw new Error("Command(s) should be a string or an array");
  }

  let hasExecuted = false; // Prevent multiple executions

  return {
    name: "execute",
    generateBundle: function () {
      // Only execute once per build cycle
      if (hasExecuted) {
        return;
      }
      hasExecuted = true;

      var copy = commands.slice(0);
      var next = function () {
        var command;
        if (!(command = copy.shift())) {
          // Reset for next build cycle
          setTimeout(() => {
            hasExecuted = false;
          }, 100);
          return;
        }

        if (sync !== undefined && sync == true) {
          let ret = spawnSync(command, {
            shell: true,
            stdio: "inherit",
            env: process.env,
          });
          if (ret.status === 0) {
            next();
          }
        } else {
          spawn(command, {
            shell: true,
            stdio: "inherit",
            env: process.env,
          }).on("close", function (code) {
            if (code === 0) {
              next();
            }
          });
        }
      };
      next();
    },
  };
}

export default execute;
