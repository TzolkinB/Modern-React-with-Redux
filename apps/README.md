![CI/CD workflow](https://github.com/TzolkinB/Modern-React-with-Redux/actions/workflows/cicd.js.yml/badge.svg)

# Animals App and Image Browser App

Uses react-router-dom v6, typescript 5

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

# Getting Started

App was created originally with create-react-app then migrated to [Vite](https://vitejs.dev/guide/).

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
