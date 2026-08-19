import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {js, jsdoc},
    extends: ["js/recommended"],
    languageOptions: {globals: globals.browser},
    rules: {
      'jsdoc/no-undefined-types': 'error',
    }
  },
]);
