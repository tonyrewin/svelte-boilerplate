module.exports = {
    plugins: [
      "stylelint-order"
    ],
    extends: [
      "stylelint-config-standard",
      "stylelint-config-prettier"
    ],
    rules: {
      "at-rule-no-unknown": [ true, {
        "ignoreAtRules": [
          "extends"
        ]
      }],
      "block-no-empty": null
    }
  }