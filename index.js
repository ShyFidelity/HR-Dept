const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//Classes for constructors 
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const generateHTML = require('./src/source');

// create writeFile function using promises instead of a callback function


const teamArray = [];

//inquirer 

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },

    {
      type: 'input',
      name: 'manOffice',
      message: 'What is your office number?',
    },
 
 
  ]) .then(answers => {const manager = new Manager(answers.name, answers.ID, answers.email, answers.manOffice);
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
   
  ])
  .then((response) => {
    console.log(response);
    if (response.newEmployee === true) {
      addNewEmployee(); 
    } else {
      createPage();
    }

  
  });
  
};

const addNewEmployee = ()=> {
  inquirer.prompt([
    {
      type: 'list',
      name: 'newEmployeeRole',
      message: 'What team member would you like to add next?',
      choices: [
        "Engineer",
        "Intern",
    
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },


  ])

  .then(answers => {
    if (answers.newEmployeeRole === 'Engineer') {
      addEngineer(answers);
    } 
    if (answers.newEmployeeRole === 'Intern') {
      addIntern(answers);
      
    }
  });

};



const addEngineer = responses =>  {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your Github?',
    },
 
  ]) .then(answers => {const engineer = new Engineer(responses.name, responses.ID, responses.email, answers.engineerGithub);
    teamArray.push(engineer);
    addEmployee();
  });
  
  
};

const addIntern = responses =>  {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internSchool',
      message: 'What is your School?',
    },
 
  ]) .then(answers => {const intern = new Intern(responses.name, responses.ID, responses.email, answers.internSchool);
    teamArray.push(intern);
    addEmployee();
  });
  
  
};
    

//how to store each card 
//diff temp literal for each employee 
//function that goes through the list of employees 
//render each card seperately 
//push



const createPage = () => {
  fs.writeFileSync('./dist/index.html', generateHTML(teamArray));
 
};

addManager();
