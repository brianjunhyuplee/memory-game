# Memory Game
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Little game utilizing React that keeps track of your score. 
The purpose of the game is to click the images you have not clicked before.

![Image of Webstite](public/assets/images/web.png)

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use the application, simply click on the deployed link. 
[https://still-ridge-23968.herokuapp.com/](https://still-ridge-23968.herokuapp.com/)

## Process

### App.js

This file will include the general layout of the HTML page as well as some important variables and functions.

#### state

State defines some important variables such as user current score count, current high score, and previously clicked cards. An imported JSON file will also be declared here so that it can be called to create all the cards.

*this can be done with the code below*
```js
state = {
    cards : jsonfile,
    points : 0,
    highscore : 0,
    clickedCards : []
}
```

#### functions

Three important functions were implemented for this specific app. The clicked function would check to see if the currently clicked card matches any that have been clicked before. If it has not been clicked before, the function addPoints would be called.

In the addPoints function, using this.setState(), the point count should be updated. The current card id should also be added to the array using a push.

If the card clicked matches one within the array, the function losePoints would be called. In losePoints, similar but opposite operations would be run.

#### render

Render should return everthing the program would want within the HTML, this is where components will be called

### Components

Components are similar to partials in handlebars. It will take in information and spit it back out in HTML formatting. The most important component in this app was the card component.

When the card component is called within the App.js file, it will take states declared earlier within the program. By doing so, the app is able to pass in elements and functions to the card component.

Within the card component, a map can be called to create an HTML for each card that needs to be created. Within creation, the app should take in the clicked function so that each card is clickable. When the card is clicked, that specific card will run the clicked function and run the aforementioned functions.


## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    

## Code & Usage

### Models

The four main models used for this application were dog.js, dogReview.js, user.js, and userReview.js. By utilizing sequelize, each row of each table was auto incremented with a unique id.

After building the templating for each models, associations were drawn between each of the models.


![model associations](./public/assets/images/readme_imgs/models.png) 

*the code below shows how associations can be drawn*

```bash
  tablename.associate = function (models) {
    tablename.belongsTo(models.tablename2);
    
    tablename.hasMany(models.tablename3, {
      onDelete: "cascade"
    });

  };
```

The .belongsTo() function will used to state that there can be a multitude of rows from one table that apply to one row of the inputted table. The .hasMany() function would draw the opposite association. The table name preceding the function will umbrella over the inputted table meaning a multitude of rows from the inputted table can apply to one row of the preceding table.

The line stating 'onDelete: "cascade"' allows the prgram to delete all instances that apply to the one row being deleted.

#### Password Encryption

*This application utilizes a password encryption so that a user's actual password is not stored within the database. This is done for the user's security and privacy. This was implemented in the user model*

In this specific design, bcrypt was used to create an encoded password. Bycrpt uses two main processes to perform this; salt, and a hashing algorithm.

The salt process adds a random string of characters to the user's inputted password. The full concacted string would then be pushed to a hashing algorithm. The hashing algorithm converts the string into a randomized string of numbers, characters, and special characters. That finalized string will be stored in the database to be decrypted later during password verification.

*the below code shows the implementation of bycrpt in this application*

```bash
  User.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
```

### Editing User Profiles

One set of routes was dedicated to editing a user's profile. The process began with the edit button on the logged in user's profile page which redirects you to the edit profile page. The edit profile page is prepopulated with the user's database information and when the user submits the edit profile form a put request is sent to an api route which updates our database. 

![edit-profile-pic](./public/assets/images/readme_imgs/edit_profile.png)

![edit-profile](./public/assets/gifs/edit_profile.gif)

### Determining User

For this application, it is essential to be able to determine who the logged in user is. Depending on who is logged in, access to certain features may be limited. For example, A user viewing another user's profile should not be able to edit that user's information. On the flip side, a user should not be able to post a review for their own profile.

The approach for this was to grab the params from the url and find the user id. If that id matched the logged in user id, we set a predefined boolean to true. If the two id's did not match, set the boolean to false. Based on the boolean given, the HTML will render with certain elements set as hidden corresponding to what needs to be displayed.

*This implementation was used for the user profile, dog profile, review pages, and navbar options*

### Posting Reviews

Posting reviews was a little more difficult since we had to add values for who was posting the review and who was receiving the review. When a user posts a new review, a review instance is created and you get redirected back to the user profile you were on. The user profile route queries for all reviews related to this profile so your posted review will show up

![post-review-pic](./public/assets/images/readme_imgs/post_review.png)

![post-review](./public/assets/gifs/dog_review.gif)

### Search

We decided to have dropdown options dynamically populate the search parameters. This was done by querying attributes from registered users when the search page is requested.If the user didn't want to specify a search parameter then the search post route would find all dogs in the database. 

![search-post-request-pic](./public/assets/images/readme_imgs/search_post_request.png)

![search](./public/assets/gifs/search.gif)


## Technologies:

```
- HTML5                    - Nodes.js            
- CSS3                     - Sequelize
- Bootstap 4               - Passport
- Responsive Design(RWD)   - Express
- Javascript               - Connect-Flash
- Jquery                   - Dot-Env
- Mysql                    - Heroku
- Bcrypt                   - Handlebars.js
- JawsDB
```

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contributing
If you'd like to contribute, make a clone of the repository on your local machine and make a pull request with any changes you made.

## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
* [bryanbarello@gmail.com](bryanbarello@gmail.com)
* [brianjunhyuplee@gmail.com](brianjunhyuplee@gmail.com)