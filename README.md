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

3. **Run the client:**

   Navigate to the client package and start the application:

   ```bash
   cd packages/client
   npm start
   ```

4. **Run the server:**

   Navigate to the server package and start the application:

   ```bash
   cd packages/server
   npm start
   ```

## Configuration

This project uses ESLint and Prettier for code linting and formatting. The configurations are set up to ensure consistency across both packages.

- **ESLint**: The base ESLint configuration is located in `.eslintrc.base.json`, and each package extends this configuration.
- **Prettier**: The base Prettier configuration is located in `.prettierrc.base`, and each package extends this configuration.
- **TypeScript**: The base TypeScript configuration is in `tsconfig.base.json`, which is extended by each package's `tsconfig.json`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.