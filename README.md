# note-taker 
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/note-taker" />
    <img src="https://img.shields.io/github/languages/top/deeparkrish/note-taker"  />
    <img src="https://img.shields.io/github/issues/deeparkrish/note-taker" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/note-taker" >   
  </p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />

  ## Description
  An application that is used to write and save notes that helps an user to organize his thoughts and keep track of tasks he needs to complete.
  
 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Pseudocode](#pseudocode)
  * [MockUp](#mockup)
  * [ProjectDemo](#projectdemo)
  * [Testing](#testing)
  * [HerokuLink](#herokulink)
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm install -g npm 
    heroku create <appname>
  ### Deploying to heroku :
    git push heroku <branch name>

  ##  Usage
    npm start
    heroku open

  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />
  This app is covered under MIT license.
  
   ## Process
   At the  start of the application,
  * The user is presented with a landing page with a link to a notes page(index.html). 
  * When the user clicks on the link to the notes page, he is  presented with a page(notes.html) with existing notes listed in the left-hand column, 
    plus empty fields to enter a new note title and the note’s text in the right-hand column.
  * When the user clicks on an existing note in the list in the left-hand colum then, that note appears in the right-hand column.
  * When the user clicks on the write icon(+) in the navigation at the top of the page, he is being  presented with empty fields to 
    enter a new note title and the note’s text in the right-hand column.
  * When the user enters a new note title and the note’s text, then a Save icon appears in the navigation at the top of the page.
  * When the user clicks on the Save icon, the new note he has entered is saved and appears in the left-hand column with the other existing notes.
  
  ## Implementation
  
  *  A db.json file on the back end that is  used to store and retrieve notes .
  *  The data from db.json is read and written using fs module.
  *  A folder name 'router' is created that contains details about html routes and api routes 
  *  The htmlroutes file holds: GET /notes  returns the notes.html file and GET *  returns the index.html file.
  *  The apiroutes file contains: 
        1. GET /api/notes should read the db.json file and return all saved notes as JSON. 
        2. POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.A unique           id is generated for each note and  it's save into db.json.
        3. GET /api/notes/:id - looks for the id in db.json, and fetches the corresponding data.
        4. DELETE /api/notes/:id -  receives a query parameter containing the id of a note to delete and reads all notes from the db.json file, 
          removes the note with the given id property, and then rewrite the notes to the db.json file.
  * A server.js file that includes 'express' module and has  the following :
         1. A method to make the server listen at a port at port 3001.
         2. Defines Api and html routes path usage.
         3. include the middleware.
          
  ## Pseudocode
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/flow-chart.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/Pseudocode.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/pseudo1.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/pseudo2.jpeg)
  
  
  
  ##  Mockup
   ![Webpage](https://github.com/Deeparkrish/note-taker/blob/master/src/mockup.png)

  
  ##  ProjectDemo
  [![Youtube](https://img.youtube.com/vi/PT1EdH8oAFQ/0.jpg)](https://youtu.be/PT1EdH8oAFQ)
  
  ## Testing
  ### using Insomina. 
      GET http://localhost:3001/api/notes 
      GET http://localhost:3001/api/notes/<id>
      POST http://localhost:3001/api/notes
      DELETE http://localhost:3001/api/notes/<id>
   ![Webpage](https://github.com/Deeparkrish/note-taker/blob/master/src/mockup2.jpg.png)
   
  
  ## Heroku Link
  https://deepa-note-maker.herokuapp.com/
  
  ## ProjectRepo 
  Git hub link: https://github.com/Deeparkrish/note-taker

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)

