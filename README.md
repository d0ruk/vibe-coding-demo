# Vibe Coding Demo

## Overview

Vibe Coding Demo is a multi-package npm workspace that includes a client and a server package. This project serves as a demonstration of how to set up a TypeScript-based application with ESLint and Prettier configurations.

## Packages

### Client

The client package is responsible for the front-end application. It is built using TypeScript and follows best practices for code quality and formatting.

### Server

The server package handles the back-end logic. It is also built with TypeScript and adheres to the same coding standards as the client package.

## Getting Started

To get started with the Vibe Coding Demo, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd vibe-coding-demo
   ```

2. **Install dependencies:**

   Run the following command to install all dependencies for both the client and server packages:

   ```bash
   npm install
   ```

3. **Run the server:**

   Navigate to the server package and start the application:

   ```bash
   cd packages/server
   npm start
   ```

4. **Run the client:**

   Navigate to the client package and start the application:

   ```bash
   cd packages/client
   npm start
   ```

## Configuration

This project uses ESLint (with Flat Config), Prettier, and TypeScript for code linting, formatting, and type checking. The configuration is designed for consistency and modern best practices across both packages.

- **ESLint (Flat Config):**
  - The root config is in `eslint.config.mjs` (ES module, Flat Config format).
  - Each package has its own `eslint.config.mjs` that imports the root config and adds package-specific plugins and rules.
  - The client uses `eslint-plugin-react` and browser globals; the server uses `eslint-plugin-n`, `eslint-plugin-security`, `eslint-plugin-promise`, and `eslint-plugin-import` for Node.js best practices.
- **Prettier:**
  - Each package has a `.prettierrc` file with consistent formatting rules (semi, double quotes, trailing commas, etc.).
- **TypeScript:**
  - The base config is in `tsconfig.base.json` at the root.
  - Each package extends this with its own `tsconfig.json`.

All linting and formatting scripts are set up to run on both `.ts` and `.tsx` files in each package's `src/` folder.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
