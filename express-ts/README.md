````markdown
# Express Project

This is a simple Express application with a toggle button feature.

## Requirements

- Node.js
- npm

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/ruberino/functions-workshop
```
````

Navigate to the project directory:

```sh
cd express-ts
```

Install the dependencies:

```sh
npm install
```

## Building the Project

Before running the project, you need to compile the TypeScript files to JavaScript:

```sh
npm run build
```

This command will also copy the `swagger.yaml` file to the `dist/public` directory.

## Running the Application

After building the project, you can start the Express server with:

```sh
npm start
```

By default, the application will run on `http://localhost:3000`.

## Endpoints

- `GET /buttonStatus`: Fetches the current status of the button.
- `GET /buttonToggle`: Toggles the current status of the button and returns the new state.
- `GET /public/swagger.yaml`: Serves the OpenAPI specification file.

## API Documentation

To view the API documentation, navigate to `http://localhost:3000/public/swagger.yaml` in your browser to download the OpenAPI specification.
