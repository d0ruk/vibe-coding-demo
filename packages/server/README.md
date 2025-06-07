## Overview

This package contains the backend server for the application. It is built using TypeScript and Express, with SQLite as the database.

## Features

- **Database Integration**: Uses TypeORM to manage SQLite database.
- **Environment Variables**: Configured via `.env` files.
- **Logging**: Includes a robust logging system using `pino`.
- **Docker Support**: Multi-stage Dockerfile and `docker-compose` setup.

## Setup

### Prerequisites

- Node.js (v16 or later)
- Docker

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the `.env.sample` file to `.env` and update the values as needed:
   ```bash
   cp .env.sample .env
   ```

### Running the Server

1. Start the server:

   ```bash
   npm start
   ```

2. Alternatively, use Docker:
   ```bash
   docker-compose up
   ```

## Development

### Scripts

- `npm run build`: Build the project.
- `npm run start`: Start the server.
- `npm run debug`: Start the server in debug mode.

## Docker

- The `docker-compose.yaml` file includes a service for SQLite Browser, which can be accessed at [http://localhost:3000](http://localhost:3000) by default.
- To rebuild the Docker image:
  ```bash
  docker-compose build
  ```

## License

This project is licensed under the MIT License.
