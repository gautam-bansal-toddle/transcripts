import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import execute from "./plugins/rollup-execute.js";
import { babel } from "@rollup/plugin-babel";

// Determine if we are in watch mode
const isDevelopment = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
    babel({
      babelHelpers: "bundled",
      include: ["src/**/*"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: ["node_modules/**"],
    }),
    commonjs(),
    postcss({
      modules: true,
      use: [["sass"]],
      minimize: true,
      inject: true,
    }),
    isDevelopment && execute("node scripts/watch.js"),
  ],
};
