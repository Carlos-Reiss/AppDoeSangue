# **Doe Sangue!**

Desenvolver uma aplicação do zero, "_front_" e "_backend_" simples aonde teriamos um site para cadastro de doadores de sangue implementei orientado a objetos.

## Techs
  - [**Express**](https://expressjs.com/pt-br/)
  - [**Nunjucks**](https://mozilla.github.io/nunjucks/)
  - [**docker**](https://www.docker.com/)
  - [**Node-postgres**](https://node-postgres.com/)
  - [**Nodemon**](https://www.npmjs.com/package/nodemon)
  - [**Sucrase**](https://www.npmjs.com/package/sucrase)
  - [**Postbird**](https://www.electronjs.org/apps/postbird)


## Configure Database

  Utilizando docker e Postbird:

  Create imagem no docker:

  Com Postbird Create Database com nome 'Doe' para conexão automática e para senha coloque 'docker
  ficará padrão com o arquivo "/config/ConfigureConnection.js".

## How to Use

```bash
  #Clone this repository
  $ git clone https://github.com/carlos-reiss/DoeSangue.git

  # create database postgress
  docker run -it -p 5432:5432 postgres

  # open the docker image and create a database called "Donate" with contains in './config/configureConnection. Within the database create 3 fields name, email and "sangue"

  # Go into the repository
  $ cd DoeSangue

  # Install dependencies
  $ yarn install

  # Run the app port 3333
  $ yarn open

```
- Para acessar : [http:localhost:3333](http:localhost:3333)
