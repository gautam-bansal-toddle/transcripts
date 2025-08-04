import { spawn, spawnSync } from "child_process";
import { setTimeout } from "timers/promises";

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
    generateBundle: () => {
      // Only execute once per build cycle
      if (hasExecuted) {
        return;
      }
      hasExecuted = true;

      const copy = commands.slice(0);
      const next = function () {
        let command;
        if (!(command = copy.shift())) {
          // Reset for next build cycle
          setTimeout(() => {
            hasExecuted = false;
          }, 100);
          return;
        }

        if (sync !== undefined && sync == true) {
          const ret = spawnSync(command, {
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
