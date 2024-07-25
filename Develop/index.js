// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = ()=> inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project",  
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "tOfContent",
        message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "list",
        name: "license",
        message: "Whic license would you like to use?",
        choices: ['MIT','Apache','GNU','Freeware']  
    },   
    ])

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
.then((answers) => {
    const writeREADME = generateMarkdown(answers);

    fs.writeFile('README.md', writeREADME, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md")
    );
});




// // TODO: Create a function to initialize app
// function init() {}


const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', writeREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();

// // Function call to initialize app
// init();
