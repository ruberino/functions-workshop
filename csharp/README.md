
# ASP.NET Core 8 project

This is a simple ASP.NET Core 8 written using minimal API.

## Requirements

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/ruberino/functions-workshop
```

## Running the Application
Navigate to the project directory and run the following in a terminal:

```ps
dotnet run
```

This will build and start the application, the API is now accessible at http://localhost:5296/buttonStatus by default.

## Endpoints

- `GET /buttonStatus`: Returns the current status of the button (true or false).
- `GET /buttonToggle`: Toggles the current status of the button and returns the new state.
- `GET /swagger.yaml`: Serves the OpenAPI specification directly.

## API Documentation

The OpenAPI specification is inlined as a string in `Program.cs` and can be edited there.
