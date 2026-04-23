import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // This fixes the "Unexpected token <" error
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", 
      "no-unused-vars": "warn",           // Keeps warnings from breaking the build
      
      // Add these to silence the specific errors you received:
      "react/prop-types": "off",          // Fixes 'missing in props validation'
      "react/no-unescaped-entities": "off" // Fixes 'unescaped entity' errors (like ' )
    },,
  },
];