
<p align="right">
  <img height="200" src="./img.jpg" />
</p>

# **Individual Project - SoyHenry**


The general idea is to create an application in which you can see different food recipes along with relevant information about them using the external api [spoonacular](https://spoonacular.com/food-api) and from it, among other things:

- Search recipes
- Filter / Sort them
- Create new own recipes

## Project Objectives

- Build an App using React, Redux, Node and Sequelize.
- Affirm and connect the concepts learned in the race.
- Learn best practices.
- Learn and practice the GIT workflow.
- Use and practice testing.



# Environment Requirement



[![My Skills](https://skillicons.dev/icons?i=react,nodejs,styledcomponents,postgres,redux,nodejs)](https://skillicons.dev)

Currently the required versions are:

- __Node__: 12.18.3 or more
- __NPM__: 6.14.16 o more
- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3

To check which version you have installed:

```bash
node -v
npm -v
```



# Download, Install and Run 

## Download

1. Fork the repository
2. Clone the repository

## Install

The boilerplate has two folders: `api` and `client`. In these folders will be the code of the back-end and the front-end respectively.

Install the dependencies; With the console located in the folder `api` and `client` execute the following commands:

```blash
npm  install 
```
In `api` create a file called: `.env` that has the following form:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
Replace `postgresuser` and `Postgrespassword` with your own credentials to connect to postgres. This file will be ignored on github upload, as it contains sensitive information (credentials).

Additionally, it will be necessary to create from psql a database called `food`

The `client` content was created using: Create React App.

## Run

After cloning the repository, go to the console in the "api" folder and run the following command (do the same for the "client" folder)

```blash
npm start 
```












