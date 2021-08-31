const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//Classes for constructors 
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

const teamArray = [];

//inquirer 
const init = () => {
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
 
 
  ]) .then(answers => {const manager = new Manager(answers.name, answers.ID, answers.email, answer.manOffice);
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
    if (response === true) {
      addNewEmployee(); 
    } else {
      generateHTML();
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
        "Manager"
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


  ]);

  if (chocies.Engineer) {
    addEngineer();
  } 
  if (choices.Intern) {
    addIntern();
    
  }
};



const addEngineer = () =>  {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your Github?',
    },
 
  ]) .then(answers => {const engineer = new Engineer(answers.name, answers.ID, answers.email, answer.engineerGithub);
    addEmployee();
  });
  
  
};

const addIntern = () =>  {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internSchool',
      message: 'What is your School?',
    },
 
  ]) .then(answers => {const intern = new Intern(answers.name, answers.ID, answers.email, answer.internSchool);
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
