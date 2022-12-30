export const posts = [
    {
        slug: "notebook-of-linting",
        title: "Notebook of Linting",
        content: `
<h2>ESlint</h2>
<p>Best option for Atom editor when linting right in NextJS project</p>
<pre>$ npm i eslint eslint-config-next eslint-plugin-react</pre>
<pre>
// /.eslintrc file in root
{
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn"
    }
}
</pre>
        `
    }
];