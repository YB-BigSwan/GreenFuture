# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# GreenFuture Documentation
## Overview
GreenFuture is a web application focused on promoting sustainability through education and community action. The project uses React, TypeScript, Vite, and Express technologies.

## Getting Started
To start the project locally, ensure you have Node.js and npm installed. Clone the repository and install dependencies using npm install. Start the backend server using npm start inside the backend directory. In the root directory, start the frontend development server using npm run dev.

## Project Structure
The project is divided into two main parts: the backend server and the frontend application.

## Backend
The backend is built with Express.js and interacts with a SQL database. Key files include:

server.js: The main server file that sets up the API endpoints and database connections.
package.json: Lists the project dependencies and scripts.
Initial_Database_Script.sql & alter_petition_script.sql: SQL scripts for setting up the database schema and sample data.

## Frontend
The frontend uses React and TypeScript and is bundled using Vite. Key components include:

App.tsx: The main React component that routes different pages of the application.
NavBar.tsx & Footer.tsx: Components for the navigation bar and footer.
Homepage, Events, Donations, Petitions, Volunteer: Pages of the application, each represented by a TypeScript file in the src/pages directory.
HeroSection, ContentSection, AboutUs, Highlights: Reusable components used within the Homepage.
Environment Setup
Ensure the .env file in the backend directory contains the correct database and authentication details.

## Deployment
The .github/workflows/deploy.yml file contains a GitHub Actions workflow for deploying the application.

