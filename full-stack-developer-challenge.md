# Full Stack Developer challenge:
## Device Management

The purpose of this exercise is to help any store manager to have a friendly interface which allows them to manage any items in their shop.
It should also help them find an item by brand or model, and to see more details using a simple search.

For this example, we’re simulating a Mobile Device shop.

To familiarise with the date, you can find attached an SQL file which will generate a list of devices in your database. You will read, write and modify the structure of the database when required.

Please provide a public Git repository link where is possible to download the code to review.

Enjoy! 

## Requirements
- RESTful API using NodeJS.
- ReactJS framework to build your frontend.
- Use Docker to create your environment

## Tasks

### API:
- Create API routes
- Create the database using the SQL file provided
- Add ‘created_datetime’ and ‘update_datetime’ records to the SQL devices table 
- Make sure that the created_datetime saves the current date/time by default and never updates
- Make sure that the update_datetime updates the value with the date/time of the action

### WEB UI:
- List all the devices showing Brand, Model, OS and Release Date 
- Order listed items by OS alphabetically
- Add ability to search by any listed column
- Ability to add a new device 
- Ability to edit an existing device
- Ability to delete a device

### OPTIONAL:
- Unit test: 
    - Add assertion for a required model and brand
    - Add assertion for a valid release_date format (YYYY/MM)
- API and Frontend
    - Add validation for the release_date format (YYYY/MM)
    - Make the Brand and Model fields mandatory




