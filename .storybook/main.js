import { preprocess } from '../svelte.config.cjs'

export default {
  "stories": [
    "./stories/**/*.stories.mdx",
    "./stories/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "svelteOptions": {
    "preprocess": preprocess
  }
}