import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import execute from "./plugins/rollup-execute.js";

// Determine if we are in watch mode
const isDevelopment = process.env.ROLLUP_WATCH === "true";

console.log("isDevelopment:", isDevelopment);

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "build/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: "styles.css",
      modules: true,
      use: [
        [
          "sass",
          {
            silenceDeprecations: ["legacy-js-api"],
          },
        ],
      ],
      minimize: true,
    }),
    isDevelopment && execute("node scripts/watch.js"),
  ],
};
