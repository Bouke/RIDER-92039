module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: "./tsconfig.json"
            },
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ]
        }
    ]
};
