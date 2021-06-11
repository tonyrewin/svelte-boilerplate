module.exports = {
	"src/**/*.{js,ts,json,svelte}": [
		// --plugin parameter required to work with pnpm
		"prettier --plugin=./node_modules/prettier-plugin-svelte --write",
		// "eslint --fix"
	],
	// "src/**/*.{css,scss,sass}": [ "stylelint --fix" ],
	"src/**/*.svelte": [ "svelte-check" ]
}