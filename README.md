# Gastronomique Explorer

- The project is a user-friendly web-based application that provides an interactive map showing restaurants located along a road, similar to the Michelin Guide.

## Prerequisites

- NodeJS v18.14.2 (or higher)
- NPM v9.5.1 (or higher)
- [MongoDB for Windows](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.5-signed.msi) v4.4.4 (with mongo atlas, GUI for MongoDB)
- nodemon `npm install -g nodemon`

## To start server

- Running MongoDB
  - with database "gastronomique"
  - collections:
    - places
    - users (optional, not used right now)
- Open terminal in seperate window:
- `cd backend`
- `npm install`
- `npm start`

## Contributions
| Kdo | Co |
| ----- | --- |
| Adam Lipert | Práce na backendu, vytvoření api pro použití na frontendu, pomáhání Simonovi jak implementovat API na frontendu, Vytvoření README.md |
| Simon Kašpar | tvorba úplně základního zobrazení dat na mapě (později jsme se dohodnuli, že VUE je pro něj složité, tak začal dělat jiný projekt, který vám nejspíše již odevzdal) |
