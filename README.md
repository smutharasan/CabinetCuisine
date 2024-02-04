# Pantry Pal
![Pantry Pal](https://raw.githubusercontent.com/smutharasan/PantryPal/main/public/logo.ico)

## Contributers
Supriya Mutharasan - Zara Farrukh - Rabia Chattha - Rosie Khurmi - Nimra Rehman

## Overview 

Cloud web app that takes in a list of ingredients and generates a list of delicious recipe using AI. Assists you through the cooking process to make sure your meal never gets burnt again.

## What it does
This website will take in a list of ingredients given from a user and will generate a list of custom recipes depending on the user's cooking experience and preferences. There is a bonus feature of a chat bot that will assist the user throughout the cooking process to ensure their food is tasty.

## How it was built
We built the website using a ReactJS framework along with HTML\CSS\JavaScript for the static web content. For the chatbot, we implemented Microsoft Azure's Open AI, specifically ChatGPT 3.5. As for the recipe generation function, we implemented a Spoonacular API to give a list of recipes from a list of ingredients. Finally, all development operations were possible with the help of Microsoft Azure services for continuous integration and continuous deployment.  As a additional element, we would add a public SSL Certificate, which can also be found through Microsoft Azure.

## Important Links: 
[Pantry Pal Public URL](https://victorious-forest-0287dbc10.4.azurestaticapps.net)

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Create accounts in the following two platforms: Spoonacular and OpenAI. Create a ```.env``` file and upload the two following API key(s):

- Spoonacular API
- ChatGPT API

## Run the following commands:

```npm i```
```npm run start```


