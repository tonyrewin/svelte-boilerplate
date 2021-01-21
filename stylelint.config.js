module.exports = {
    plugins: [
      "stylelint-order"
    ],
    extends: "stylelint-config-prettier",
    rules: {
      "at-rule-no-unknown": [ true, {
        "ignoreAtRules": [
          "extends",
          "tailwind"
        ]
      }],
      "block-no-empty": null
    }
  }