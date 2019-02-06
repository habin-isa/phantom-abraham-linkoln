# Bookmarks manager built using Angular.js
## Front-end only web app working with Angular.js for the first time. Light-hearted UI with simple functionality, deployed to Heroku.

## As a user I can:
- Add a bookmark, with a name and a category
- View a list of all bookmarks, click on each to visit sites
- Edit and delete any bookmark
- Search through bookmarks

## Use the app:
https://abraham-linkoln.herokuapp.com/

![alt text](/assets/linkoln-draft.png "Mock-up image")

## Installation instructions:
- $ git clone https://github.com/habin-isa/phantom-abraham-linkoln.git
- $ cd phantom-abraham-linkoln
- $ npm install
- $ npm start

## Tech:
- Angular.js
- HTML/CSS
- Express
- Node.js
- Heroku
- ES Lint
- Invision studio for design

![alt text](/assets/linkoln-diagram.png "Structure")

## Approach:
- Learn the basics of Angular.js through tutorials and then by creating the MVP for the project. Draw from experiences of using JS and Vue.js to create adaptable code.
- Begin by creating a simple interface that has a form for users to add a link, then display the link. Extend by adding categories into the bookmark array (i.e. one bookmark will have a link, name and category tag). Extend by displaying an array of bookmarks in a ng-repeat loop. List is created with anchors so that users are able to click on directly go to any of the links.
- Sets up node and express server.
- Adds custom url validation and a thank you message for users on submission of a new bookmark.
- Adds ability for users to edit any bookmark through ng-model in a form, by taking the index of the selected bookmark.
- Adds ability for users to delete any bookmark, similarly to editing a bookmark.
- Sets up automatic deployment (CI, CD) to Heroku.
- Extends by experimenting with filter, adds search bar to search through bookmarks.
- Continues to deploy style changes and linter.

## Struggles:
- Struggled hugely with keeping the controller skinny, the controller is very clunky and has not been distributed into multiple modules, I would like to improve this with more time. I see this as a result of learning Angular.js whilst creating the project. I would like to spend time understanding the best practices of Angular.js and how to go about creating components to optimise this app.
- I wasn't able to successfully implement pagination, I would like to experiment with how to create a custom filter in the controller.

![alt text](/assets/linkoln-improvements.png "Improvements")

## Improvements:
- My main priority is to distribute every module into components away from the main index.html page. Above is a dipiction of how I plan to go about delegating responsibilites away from the main ng-controller.
- Set up the project to use a database instead of dummy data.
- Set up e2e testing.