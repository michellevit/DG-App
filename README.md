# DG Draft

![Ruby Version](https://img.shields.io/badge/Ruby-3.2.3-cc0000.svg)
![Rails Version](https://img.shields.io/badge/Rails-7.1.3-cc0000.svg)
![React Version](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178c6.svg)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-6762a6.svg)

This website was created for creating fantasy disc golf leagues.

<a href="https://dgdraft.com" target="_blank"><img src="https://img.shields.io/badge/Website-red?style=for-the-badge&logo=ruby"></a>


## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Architectural Decisions](#architectural-decisions)
- [What I Learned](#what-i-learned)
- [Basic Usage](#basic-usage)
  - [Activate Virtual Env](#virtual-env)
  - [Update Player/Event Data](#update-pdga-data)
  - [Using the Heroku CLI](#heroku-cli)
- [Troubleshooting](#troubleshooting)
- [Features To Add](#features-to-add)
- [Credits](#credits)


## Technologies Used<a name="technologies-used"></a>
- Ruby
- Rails
- React
- Typescript
  

## Features<a name="features"></a>
- User Authentication


## Architectural Decisions<a name="architectural-decisions"></a>
- **Authentication: Session vs Token:** Moving from session[:user_id] = user.id to a JWT approach: shifted from a stateful, server-side session management to a stateless, client-side token management strategy. 
- **React Context API:** Provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree (prop drill).


## What I Learned<a name="what-I-learned"></a>


## Basic Usage<a name="basic-usage"></a>
### Activate the Virtual Env<a name="virtual-env"></a>
- Activate the virtual env: 
  - Navigate to the python folder in the terminal
  - Run `.\venv\Scripts\activate`

### Update Player/Event Data<a name="update-pdga-data"></a>
- Make a copy of the python/dg-data-2024.xlsx file and update the year
- Get the data from pdga.com (follow notes instructions)
  - Copy/paste the player and event data
- Save the file in the python folder
- Modify the jsonify-data.py var 'excel_file_name' to have the current year
- Run `python jsonify.data.py`
- The data will be saved to the json files in lib/seeds
- Run the rake file to push the data to the database 
  - Development: `rails db:seed`
  - Production: `heroku run rake db:seed --app dg-draft`
  - Note: this will not create duplicates of entries with the same pdga#
  - Note: this will not create duplicates of events with the same start/end date

### Using the Heroku CLI<a name="heroku-cli"></a>
- Login: `heroku login`
- Migrate DB: `heroku run rake db:migrate -a dg-draft`
  - Note: make sure to commit to git before migrating
- Open DB Console: `heroku pg:psql -a dg-draft`
  - View all data from table: `SELECT * FROM users;`
  - Delete all data from table: `DELETE FROM challenges;`
- Get DB Data?: `heroku run rails console -a dg-draft`
- Get Heroku Logs: `heroku logs -a dg-draft`
- Restart Heroku Server: `heroku restart -a dg-draft`
- Seed DB: `heroku run rake db:seed --app dg-draft`


## M Instructions <a name="features-to-add"></a>
- When deploying to an actual website (and not just personal domain for demo):
  - Change the origin allowed in config/initializers/cors.rb
  - Change the cookie domain specified in config/initializers/session_store.rb
  - Change the domain specified in config/initializers/cors.rb
  - Change the domain specified in reactapp/.env
  - logo 192 + logo 152


## Troubleshooting<a name="troubleshooting"></a>
- Apply migrations after modifying the models

## Features To Add <a name="features-to-add"></a>
- add bet-card component
  - tournament name
  - MPO or FPO
  - tournament date start
  - tournament date end 
  - close-window for selecting players
  - single or matchup
  - player A
  - player B
  - player C
  - player D
  - player E
- add leaderboard
- forgot password
- change password
- contact form


## Credits <a name="credits"></a>
Michelle Flandin