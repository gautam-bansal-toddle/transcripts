import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import execute from "./plugins/rollup-execute.js";
import { babel } from "@rollup/plugin-babel";
import dotenv from "dotenv";
import replace from "@rollup/plugin-replace";

// Load environment variables from .env file
const envConfig = dotenv.config().parsed;
// Transform env variables for @rollup/plugin-replace
const replaceValues = {};
for (const key in envConfig) {
  if (Object.prototype.hasOwnProperty.call(envConfig, key)) {
    replaceValues[`process.env.${key}`] = JSON.stringify(envConfig[key]);
  }
}

// Determine if we are in watch mode
const isDevelopment = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "esm",
      sourcemap: isDevelopment,
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      values: replaceValues,
    }),
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
    // Only minify in production builds (not in development/watch mode)
    !isDevelopment &&
      terser({
        format: {
          comments: false, // Remove comments
        },
      }),
    isDevelopment && execute("node scripts/watch.js"),
  ].filter(Boolean), // Filter out falsy values (like in watch mode)
};
