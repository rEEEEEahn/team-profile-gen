const fs = require("fs");
const inquirer = require ("inquirer");
const engineer = require ("./engineer");
const manager = require ("./manager");
const intern = require ("./intern");
const generateHTML = (answers) =>
``;
function getTeamInfo () {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
  ])
  
  .then((answers) => {
    answers = answers;
    return getNextEmployee();
  })};
function getNextEmployee() {
  return inquirer
    .prompt ([
      {    
        type: "list",
        name: "choice",
        message: "Who is your next team member?",
        choice: ['Engineer', 'Intern', 'Done'],
      },
    ])
 // conditionals / switch
  // if engineer, bring in engineer.js and use their questions
  // if intern, bring in intern.js and use their questions
  // if manager, bring in manager.js and use their questions
    .then((employee) => {
      switch (employee.next) {
        case "Engineer":
          return addEngineer();

        case "Intern":
          return addIntern();

        case "Done":
          return renderHTML();
      }
    });
}

