const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { 'allowExpressions': true }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'class',
        'format': ['PascalCase'],
      },
      {
        'selector': ['interface', 'typeLike'],
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': false
        }
      },
      {
        'selector': 'enum',
        'format': ['PascalCase'],
      },
      {
        'selector': 'enumMember',
        'format': ['UPPER_CASE']
      },
      {
        'selector': 'function',
        'format': ['camelCase'],
      },
      {
        'selector': 'variable',
        'format': ['camelCase'],
      },
      {
        'selector': 'variable',
        'modifiers': ['exported'],
        'format': ['camelCase', 'PascalCase'],
      },
      {
        'selector': 'variable',
        'modifiers': ['const', 'exported'],
        'types': ['string', 'boolean', 'number'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        'selector': ['variable', 'function',],
        'modifiers': ['unused'],
        'format': ['camelCase', 'PascalCase'],
        'leadingUnderscore': 'allow'
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    'complexity': ['error', 2],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
};
