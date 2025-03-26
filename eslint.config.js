import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

/**
 *
 * @param {string} ignoreFilePath
 * @returns
 */
function includeIgnoreFile(ignoreFilePath) {
	if (!path.isAbsolute(ignoreFilePath)) {
		throw new Error('The ignore file location must be an absolute path.');
	}

	const ignoreFile = fs.readFileSync(ignoreFilePath, 'utf8');
	const lines = ignoreFile.split(/\r?\n/u);

	return {
		name: 'Imported .gitignore patterns',
		ignores: lines
			.map((line) => line.trim())
			.filter((line) => line && !line.startsWith('#'))
			.map(convertIgnorePatternToMinimatch)
	};
}

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);
