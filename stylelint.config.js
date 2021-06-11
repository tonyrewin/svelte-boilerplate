export default {
    plugins: [
      "stylelint-order"
    ],
    extends: [
      "stylelint-config-recommended",
      "stylelint-config-prettier"
    ],
    rules: {
      "at-rule-no-unknown": [ true, {
        "ignoreAtRules": [
          "extends",
          "tailwind"
        ]
      }],
      "block-no-empty": null,
      "unit-whitelist": ["em", "rem", "s"]
    }
  }