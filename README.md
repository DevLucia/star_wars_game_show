# Star Wars Game Show API

NodeJS api to manage data from contestants of the Star Wars Show.

---
## Requirements

You will only need Node.js and a node global package such as npm.
For DB you will need mongoDB installed.

## Install and launch

Clone repository from git@github.com:DevLucia/star_wars_game_show.git
Access to repo data with cd eurostar_starwars_api
Install dependencies using npm i
Launch dev mode with npm run nodemon
Launch app with npm run start

## Code structure

Code is structured in different folders:
- `models`: contestant data model.
- `routes`: routes available in the api, in this case only contestant routes.
- `controllers`: controllers available, in this case to access and return contestant data when requested.
- `config`: project config such as db and cors

## Endpoints

- `GET /contestant/`: get all contestant data.
- `POST /contestant/`: add new contestant to db.
- `PUT /contestant/:id`: edit contestant data.
- `DELETE /contestant/:id`: delete contestant


