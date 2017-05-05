# Altruist

Altruist more than just a website, it is a gateway into volunteering.  Altruist allows both Volunteers and Nonprofits to find themselves easier and quicker than current or traditional methods.

Check it out for yourself: https://altruistic.herokuapp.com/

![homepage](screenshots/homepage.png)

### All nonprofits must register before they can begin using the site
![register](screenshots/register.png)

### Nonprofits and volunteers can see the profile pages of the nonprofits
![nonprofit_profile](screenshots/nonprofit_profile.png)

### Nonprofits also have access to dashboard that shows all booked volunteers
![nonrofit_dashboard](screenshots/nonrofit_dashboard.png)

### Finally nonprofits can search for new volunteers with a push of a button
![nonprofit_search](screenshots/nonprofit_search.png)

### On the volunteer's dashboard they can view or cancel upcoming events
![volunteer_dashboard](screenshots/volunteer_dashboard.png)

Technologies used:
* Bootstrap
* EJS
* Node
* express
* google maps API
* Knex js
* PostgrSQL
* Heroku

Project Members:
* Betty Chempananical
* Donny Barclay

Installation Instructions:
Fork and clone
Run NPM Install
Create a postgresql database called
  ```
  createdb altruistic_dev
  ```
Run migration files:
  ```
  npm run knex migrate:latest
  ```
Run seed files:
  ```
  npm run knex seed:run
  ```
Start server
  ```
  npm run dev
  ```
In a browser navigate to:
  ```
  localhost:3000
  ```
