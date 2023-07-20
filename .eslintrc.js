module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
        "parser": '@typescript-eslint/parser'
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'react/jsx-indent': 0,
        'indent': 0,
        'quote-props': 0,
        'quotes': 0,
        'comma-dangle': 0,
        'strict-boolean-expressions': 0,
        'import/prefer-default-export': 0,
        'no-multiple-empty-lines': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        'strict-boolean-expression': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        "@typescript-eslint/comma-dangle": 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/quotes': 0,
        '@typescript-eslint/indent': 0,
        'no-tabs': 0,
        "no-unused-expressions": "off",
        "@typescript-eslint/no-confusing-void-expression": 0,
        "@typescript-eslint/no-unused-expressions": 0,
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "n/handle-callback-err": 0,
        "multiline-ternary": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/display-name": 0,
        "@typescript-eslint/no-dynamic-delete": 0,
        "react/prop-types": 0,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/no-invalid-void-type": 0,
        "promise/param-names": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/consistent-type-imports": 0,
        "@typescript-eslint/member-delimiter-style": 0,
    },
    "globals": {
        _IS_DEV_: true
    }
}
