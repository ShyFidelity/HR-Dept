
const generateHTML = (answers) =>{
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./assets/style.css">
    

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <title>HR Department</title>
</head>
<body>
<div class="container">
<h1>My Precious Employees</h1>

${createManager(answers)}
${createIntern(answers)}
${createEngineer(answers)}
</div>
</body>
`
};
const createManager = (answers) => {
  console.log(answers);
  // Create Manager Profile
   return `
    <div class="card employee-card z-depth-3">
        <div class="card-header text-center">
            <h2 class="card-title">${answers[0].getName()}</h2>
            <h4 class="card-title">Title: ${answers[0].getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${answers[0].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${answers[0].getEmail()}">${answers[0].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${answers[0].officeNum}</li>
            </ul>
        </div>
    </div>
    `;
  };
  


  
    const createEngineer = answers => {
      const engineers = answers.filter((answer)=> (answer.getRole() === 'Engineer'));
      console.log(engineers);
      const engineerArray = [];
      engineers.forEach(engineer => {
        engineerArray.push( `
         <div class="card employee-card z-depth-3">
             <div class="card-header text-center">
                 <h2 class="card-title">${engineer.getName()}</h2>
                 <h4 class="card-title">Title: ${engineer.getRole()}</h4>
             </div>
             <div class="card-body bg-light">
                 <ul class="list-group text-dark">
                     <li class="list-group-item">ID: ${engineer.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                     <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                  
                 </ul>
             </div>
         </div>
         `)
      });
      return engineerArray.join(",");
      
  
  };

  
    const createIntern = answers => {
      const interns = answers.filter((answer)=> (answer.getRole() === 'Intern'));
      console.log(interns);
      const internArray = [];
      interns.forEach(intern => {
        internArray.push( `
         <div class="card employee-card z-depth-3">
             <div class="card-header text-center">
                 <h2 class="card-title">${intern.getName()}</h2>
                 <h4 class="card-title">Title: ${intern.getRole()}</h4>
             </div>
             <div class="card-body bg-light">
                 <ul class="list-group text-dark">
                     <li class="list-group-item">ID: ${intern.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                     <li class="list-group-item">School: ${intern.getSchool()}</li>
                  
                 </ul>
             </div>
         </div>
         `);
      });
    return internArray.join(",");
      };

      module.exports = generateHTML;