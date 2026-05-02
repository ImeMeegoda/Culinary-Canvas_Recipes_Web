
# Recipe Card Collection

A beautiful and interactive web app for browsing, viewing, and managing a collection of delicious recipes. Built with React, TypeScript, and Vite.

## Quick Start

1. **Install dependencies:**
  ```bash
  npm install
  # or
  yarn install
  ```
2. **Run the app locally:**
  ```bash
  npm run dev
  # or
  yarn dev
  ```
3. **Open in browser:**
  Go to http://localhost:5173/Recipe-Card-Collection/

---

## Features

- Visually appealing recipe cards with images, tags, ratings, and quick info
- Click to view full recipe details, ingredients, and step-by-step instructions
- Support for vegetarian, vegan, dessert, and international cuisines
- Fast, modern UI with responsive design
- Easy to add or update recipes via code

All recipe images are stored in the `public/assets` folder and referenced in the data for seamless display.


## Deployment (GitHub Pages)

  ```bash
  git add .
  git commit -m "Your message"
  ```
2. GitHub Actions/Pages will automatically build and deploy your site.
3. Your site will be live at:
  `https://<your-username>.github.io/Recipe-Card-Collection/`

**Do not use `git subtree`, `gh-pages` branch, or any manual deployment scripts.**

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
