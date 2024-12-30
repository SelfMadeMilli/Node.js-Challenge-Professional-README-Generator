// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { emit } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the concept of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Do you have installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Explain how to use the application by providing detailed steps:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your license choice for your project:',
        choices: ['licenseChoices']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How to contribute to your project or application ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide a way to test?',
    },
    { 
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created your README')
      );
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then(answers => {
        writeToFile('OUTPUT.md', generateMarkdown({...answers}))
    })

// Function call to initialize app
init();

   
