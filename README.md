# functions-workshop

The setting for this workshop is a button we want the chatbot to check the status for and to toggle. The button can be a physical button or a virtual button. The button is repsented as a variable. The server is running locally on your machine and is exposed to the internet using ngrok. The chatbot is AboveGPT and is running in the cloud.

## Introduction

This repository contains the code for the functions workshop. This is you assignment

1. Clone the repository of choice to your local machine.
2. Start and run the server locally, see the readme in for each language for instructions.
3. Download and setup ngrok to expose your server on the internet.

## Assignment

- See if you can get the chatbot to call your functions, check the current status of the buttonand toggle the button on and off using only the chatbot.
- You must tweak (promt engeneer) the swagger file to make it work. (hint: the chatbot does not care about response codes, but the description of the endpoint and parameters is important)
- Modify the code and create a new endpoint to dim the lightbulb. edit the in memory vaiable accordingly.

### Extra Credit:

- Add a new endpoint for the model to interact to, it can be anything. You can use the [chuck norris api](https://api.chucknorris.io/) for inspiration
- Connect to a real lightbulb [Trådfri API](https://github.com/fjaderboll/pytradfri-rest)

## Tools

- Postman
  - Download postman from [here](https://www.postman.com/downloads/) get started [here](https://learning.postman.com/docs/getting-started/introduction/)
- ngrok
  - Download ngrok from [here](https://ngrok.com/download) get started [here](https://ngrok.com/docs/getting-started/?os=windows)
- AboveGPT
  - [AboveGPT url](https://chat.aboveit.no/)
