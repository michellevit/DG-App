# Disc Golf Bets

![Ruby Version](https://img.shields.io/badge/Ruby-3.2.3-red.svg)
![Rails Version](https://img.shields.io/badge/Rails-7.1.3-red.svg)
![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-lightgrey.svg)

This website was created for making bets (non-monetary) on disc golf tournament standings.

<a href="https://dg-bets.michellef.dev/api" target="_blank"><img src="https://img.shields.io/badge/Website-red?style=for-the-badge&logo=ruby"></a>


## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Architectural Decisions](#architectural-decisions)
- [What I Learned](#what-i-learned)
- [What I Would Do Differently](#what-i-would-do-differently)
- [Basic Usage](#basic-usage)
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

## Architectural Decisions<a name="architectural-decisions"></a>
- **Authentication: Session vs Token:** Moving from session[:user_id] = user.id to a JWT approach: shifted from a stateful, server-side session management to a stateless, client-side token management strategy. 
- **React Context API:** Provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree (prop drill).

## What I Learned<a name="what-I-learned"></a>

## What I Would Do Differently<a name="what-i-would-do-differently"></a>

## Basic Usage<a name="basic-usage"></a>

### Using the Heroku CLI<a name="heroku-cli"></a>
- Login: `heroku login`
- Migrate DB: `heroku run rake db:migrate -a dg-bets`
- Get DB Data: `heroku pg:psql -a dg-bets`, `SELECT * FROM users;`
- Get Heroku Logs: `heroku logs -a dg-bets`
- Restart Heroku Server: `heroku restart -a dg-bets`

## M Instructions <a name="features-to-add"></a>
- When deploying to an actual website (and not just personal domain for demo):
  - Change the origin allowed in config/initializers/cors.rb
  - Change the cookie domain specified in config/initializers/session_store.rb
  - Change the domain specified in config/initializers/cors.rb
  - Change the domain specified in reactapp/.env
  - logo 192 + logo 152


## Troubleshooting<a name="troubleshooting"></a>

## Features To Add <a name="features-to-add"></a>
-update username not working

## Credits <a name="credits"></a>
Michelle Flandin