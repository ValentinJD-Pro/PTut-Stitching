module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
        "parser": "babel-eslint"
    },
    globals: {
        cv: false,
        process: false,
        module: false,
        workbox: false
    },
}