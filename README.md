# Angular6Corb

This project is only to show the two issue with php-crud-api2
1. if you post other data to the server API it does not work
2. If the server give a server error the CORB is not handled

## Development server

To run the application you need to install NodeJS and Angular
NodeJS
https://nodejs.org/en/

Angular - in shell
npm install -g @angular/cli
Install all the apps need for this project

npm install 
then you can run
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run php code from source php-crud-api2 root folder
php -S localhost:8000

php-crud-api.service.ts point to the below URL
baseURL = 'http://localhost:8000/src/index.php/data/';

 