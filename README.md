# tympa-health-device-management

## Plan

- Separate the frontend from the backend including the routing, the idea was to let React handle the frontend page routing and only use the backend/api routes for api related requests (any interaction with the db or processing)
- Have a function to create the database and run through the migrations of creating tables as well as creating the devices
- Build script to compile all the typescript files to javascript
- Containerize the postgresql database as a standalone from the app itself

## Running

The idea was to run from within api:
```
npm run build && npm run start
```

followed by running from client:
```
npm run start
```