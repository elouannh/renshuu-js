import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config({
    "ignores": ["types", "lib", "docs", "node_modules", "doc.builder.js", "builder.js", "src/tests/**"],
    "extends": [
        eslint.configs.recommended,
        ...tsEslint.configs.recommended,
        ...tsEslint.configs.strict,
        ...tsEslint.configs.stylistic,
        ...tsEslint.configs.recommendedTypeChecked,
        {
            languageOptions: {
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir: import.meta.dirname,
                },
            },
        },
    ],
    "rules": {
        "init-declarations": ["error", "never", { "ignoreForLoopInit": true }],
        "id-length": ["error", { "min": 3, "exceptions": ["on", "db", "i", "id", "fs", "AD"] }],
        "max-classes-per-file": ["error", { "max": 1 }],
        "max-depth": ["error", { "max": 4 }],
        "max-lines": ["error", { "max": 1000, "skipBlankLines": true, "skipComments": true }],
        "max-lines-per-function": ["error", { "max": 80 }],
        "max-nested-callbacks": ["error", { "max": 4 }],
        "max-params": ["error", { "max": 4 }],
        "max-statements": ["warn", { "max": 50 }],
        "max-len": ["error", { "code": 100, "tabWidth": 4, "ignoreUrls": true }],
        "no-extraneous-class": "off",
        "@typescript-eslint/no-var-requires": ["error", { "allow": ['/package\\.json$'] }],
    }
});