import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import execute from "./plugins/rollup-execute.js";
import { babel } from "@rollup/plugin-babel";
import ts from "typescript";

// Determine if we are in watch mode
const isDevelopment = process.env.ROLLUP_WATCH === "true";

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
    babel({
      babelHelpers: "bundled",
      include: ["src/**/*"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: ["node_modules/**"],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: ts,
    }),
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
