module.exports = {
    "root": true,
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": ["./tsconfig.json"],
      "extraFileExtensions": [".svelte"],
      "createDefaultProgram": true,
      "ecmaVersion": 2021,
      "sourceType": "module"
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
      // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    "plugins": [
      "svelte3",
      "@typescript-eslint",
      "prettier"
    ],
    "overrides": [
      {
        "files": ["*.svelte"],
        "processor": "svelte3/svelte3"
      },
      {
        "files": ["*.ts"],
        "extends": [
          "plugin:@typescript-eslint/recommended",
          "plugin:prettier/recommended"
        ]
      },
      {
        "files": ["*.js"],
        "rules": {
          "@typescript-eslint/no-var-requires": "off"
        }
      }
    ],
    "settings": {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      "svelte3/typescript": true,
      "svelte3/ignore-styles": () => true
    },
    "rules": {
      "no-unused-vars": "off"
    }
  }
  
