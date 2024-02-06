![CI/CD workflow](https://github.com/TzolkinB/Modern-React-with-Redux/actions/workflows/cicd.js.yml/badge.svg)

# Animals App, Image Browser App, and Booklist App

Uses react-router-dom v6, typescript 5, Material UI

Instead of multiple small apps with their own package.json and dependency management, the apps built in the tutorial are moved into their own folders after src
```js
-src/
 | animals/
 | ImageBrowser/
 | BookList/
 | App.tsx // where react router is used
 | index.tsx
```

## Image Browser

Enter search term to search Unsplash images api and shows ten results on page.

```js
Uses: [Axios](https://axios-http.com/) and React useState hook.
```

## BookList

Create a new book in the list then either edit it or delete it from the list.
```js
Uses: JSON-server, and React useState hook.
```

# Getting Started

App was created originally with create-react-app then migrated to [Vite](https://vitejs.dev/guide/).

Cypress uses Webpack under the hood but Vite does not.
```js
- cypress-vite // package allows us to use vite config and preprocessor for Cypress tests
- start-server-and-test // optional package, simplifies process of running server and tests in parallel
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Opens browser automatically to [http://localhost:3030](http://localhost:3030), where the port is set in **vite.config.js**.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run lint`

Runs eslint against all .tsx files, directories listed in the **.eslintignore** file are ignored automatically

### `npm test`
