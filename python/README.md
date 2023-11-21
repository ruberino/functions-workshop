# Flask Project

This is a simple Flask application with a toggle button feature.

## Requirements

- Python 3
- pip

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/ruberino/functions-workshop
```

Navigate to the project directory:

```sh
cd python
```

Install the dependencies:

```sh
pip install -r requirements.txt
```

## Running the Application

To start the Flask server, run:

```sh
python app.py
```

The application will serve on `http://localhost:5000` by default.

## Endpoints

- `GET /buttonStatus`: Returns the current status of the button (true or false).
- `GET /buttonToggle`: Toggles the current status of the button and returns the new state.
- `GET /swagger.yaml`: Serves the OpenAPI specification file directly.

## API Documentation

To view the OpenAPI documentation, open `http://localhost:5000/swagger.yaml` in your browser to display the swagger file.
