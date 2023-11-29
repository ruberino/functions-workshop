# Kotlin Project

This is a simple Kotlin application with a toggle button feature.

## Requirements

- Java
- Kotlin
- An IDEA

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/ruberino/functions-workshop
```

## Navigate to the project directory:

Open the project in your IDEA, or chosen development. If you are using IntelliJ, the project will build itself.

Run the application - it will serve on `http://localhost:3000` by default.

## Endpoints

- `GET /buttonStatus`: Returns the current status of the button (true or false).
- `GET /buttonToggle`: Toggles the current status of the button and returns the new state.
- `GET /swagger.yaml`: Serves the OpenAPI specification file directly.

## API Documentation

To view the OpenAPI documentation, open `http://localhost:3000/swagger.yaml` in your browser to display the swagger file.
