const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/manager');


// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'manName',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'manID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'manEmail',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'manOffice',
      message: 'What is your office number?',
    },
 
 
  ]) .then(answers => {const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answer.manOffice);
  addEmployee();
});

};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'newEmployee',
      message: 'Do you want to add a new employee?',
    },
    {
      type: 'list',
      name: 'newEmployee',
      message: 'What team member would you like to add next?',
      choices: [
        "Engineer",
        "Intern",
        "nevermind"
      ]
    },
  ]);
  
};

const addEngineer = () =>  {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'engineerID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your Github?',
    },
 
  ]) .then(answers => {const engineerConst = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answer.engineerGithub);
    addEmployee();
  });
  
  
}

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <title>HR Department</title>
</head>
<body>
<div class="container">

    <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <span id="title" class="card-panel cyan darken-3">Job Title</span>
            <div class="card-content">
            <ul>
              <li>${answers.name}</li>
              <li>${answers.ID}</li>
              <li>${answers.email}</li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
</div>`;
//how to store each card 
//diff temp literal for each employee 
//function that goes through the list of employees 
//render each card seperately 
const init = () => {
  addManager()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully added employee'))
    .catch((err) => console.error(err));
};

init();
