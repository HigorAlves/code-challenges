// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, printWidth: 120, tabWidth: 2, trailingComma: 'none' }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal'
          })),
          {
            pattern: 'env',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}

function getDirectoriesToSort() {
  const ignoredSortingDirectories = ['.git', '.next', '.vscode', 'node_modules']
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory()
  })
}
