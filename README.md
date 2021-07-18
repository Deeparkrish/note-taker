# note-taker 
# Team-Profile-Generator   
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/Team-Profile-Generator" />
    <img src="https://img.shields.io/github/languages/top/deeparkrish/Team-Profile-Generator"  />
    <img src="https://img.shields.io/github/issues/deeparkrish/Team-Profile-Generator" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/Team-Profile-Generator" >   
  </p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />

  ## Description
  A command-line application that accepts user input and  generates a webpage that displays a nicely formatted team roster .
  
 
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
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm install -g npm 
    npm i inquirer
   ###  CSS:
    <link rel="stylesheet" https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

  ##  Usage
    node app.js

  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br />
  This app is covered under MIT license.
  
   ## Process
   At the  start of the application (node app ),
  * The user is  prompted to enter the team manager’s name, employee ID, email address, and office number. 
  * When the user enters the data, his input is validated by making sure that user answers all the questions, enters a valid email, 
    a phone number that is 9 digit long.
  * Next,  the user is presented with a menu with the option to add an engineer or an intern or to finish building my team.
  * When the engineer option is selected, the user is  prompted to enter the engineer’s name, ID, email, and GitHub username.
  * Upon validation, the user is  taken back to the menu option.
  * When the user selects the intern option,he is being prompted to enter the intern’s name, ID, email, and school.
  * Upon validation, the user is  taken back to the menu option.
  * The user can add as may engineers / intern to his team.
  * When the user decides to finish building my team, then the  application is exited.
  * The input data formatted in HTML is generated at "index.html".
  * When index.html is opened,a nicely formatted team roster based on user input, is rendered. 
  * When the user clicks on an email address field , the default email program opens and populates the TO field of the email with the address.
  * When the user clicks on a Github username , that GitHub profile opens in a new tab.


  ## Pseudocode
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/flow-chart.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/Pseudocode.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/pseudo1.jpeg)
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/pseudo2.jpeg)
  
  
  
  ##  Mockup
   ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/mockup1.png)

  
  ##  ProjectDemo
  #### User input/HTML generation
  [![Youtube](https://img.youtube.com/vi/f3hP1mj1puE/0.jpg)](https://www.youtube.com/embed/f3hP1mj1puE)

  ### Email/Github link 
  ![MyDemo](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/demo/git:emailDemo.gif)
  ## Testing
   Run this command to check all tests pass: <br/>
      npm run test
          
  Test cases have been added in "__test__" folder </br>
  Test Sample: </br>
  ![MyDemo](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/demo/TDD-demo.gif) 
  ![MyDemo](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/demo/TDD-demo1.gif)
  
  

  ## ProjectRepo 
  Git hub link: https://github.com/Deeparkrish/Team-Profile-Generator

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)

