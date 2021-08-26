const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const employeeParent = () => {
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
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer','Intern','Manager'],
      },
 
 
  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>${answers.role}</h1>
    <p>Hi! My name is ${answers.name}</p>
    <p class="lead"> Employee ID: ${answers.ID}.</p>
    <p class="lead"> Employee ID: ${answers.email}.</p>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
// will need to generate a new card function as well as the html page 
//or add another employee?
const init = () => {
  employeeParent()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
