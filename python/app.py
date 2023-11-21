from flask import Flask, send_from_directory, Response

app = Flask(__name__)

button_status = False


@app.route('/buttonStatus')
def get_button_status():
    print(f'Button status toggled to {button_status}')
    return {'status': button_status}


@app.route('/buttonToggle')
def toggle_button_status():
    global button_status
    button_status = not button_status
    print(f'Button status toggled to {button_status}')
    return {'toggledTo': button_status}


@app.route('/swagger.yaml')
def serve_swagger_file():
    with open('static/swagger.yaml', 'r') as f:
        yaml_content = f.read()
    return Response(yaml_content, mimetype='text/yaml')


if __name__ == '__main__':
    app.run(debug=True)
