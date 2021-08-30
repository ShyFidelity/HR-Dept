const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//Classes for constructors 
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const teamArray = [];

//inquirer 
const init = () => {
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
    teamArray.push(manager);
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
 
  ]) .then(answers => {const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answer.engineerGithub);
    addEmployee();
  });
  
  
};

const addIntern = () =>  {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'internID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What is your School?',
    },
 
  ]) .then(answers => {const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answer.internSchool);
    addEmployee();
  });
  
  
};
    

//how to store each card 
//diff temp literal for each employee 
//function that goes through the list of employees 
//render each card seperately 

  addManager()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully added employee'))
    .catch((err) => console.error(err));
};

init();
