// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project",  
    },
    {
        type: "input",
        name: "description",
        message: "Use the following questions to provide a description of your project. Provide a short description explaining the what, why, and how of your project.",
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
        message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."
    },
    {
        type: "input",
        name: "license",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)."
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
// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });



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
