# tympa-health-device-management

## Plan

- Separate the frontend from the backend including the routing, the idea was to let React handle the frontend page routing and only use the backend/api routes for api related requests (any interaction with the db or processing)
- Have a function to create the database and run through the migrations of creating tables as well as creating the devices
- Build script to compile all the typescript files to javascript

## Future

- Containerize the postgresql database as a standalone from the app itself
- A list of ul > li elements containing the devices appended with a 3 dot menu to allow for editing and deleting
- More tests
  - interactions on the frontend
  - api calls to assert actions can be completed
- Created a Model/interface to map out the structure of devices
- A generic database interface to allow for extension (should I want to change db in the future) but common calls (get, delete, etc) are extracted out to their own functions that can be called on models

## Issues

- I ran into the problem where I could start a database but it was having problems connecting continuosly and making requests

## Running

Requires:

- psql, installed with brew via `brew install postgresql@14`
  - start: `brew services start postgresql@14`
  - stop: `brew services stop postgresql@14`

The idea was to run from within api:

```
npm run build && npm run start
```

followed by running from client:

```
npm run start
```

## Tests

```
npm test
```
