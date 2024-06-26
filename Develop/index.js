// packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require('./utils/generateMarkdown');


// an array of questions for user input
const questions = [
    {
    type: "input",
    message: "Whats your project name?",
    name: "name"
}, {
    type: "input",
    message: "Whats your github?",
    name: "github",
}, {
    type: "input",
    message: "Enter project description",
    name: "project", 
}, {
    type: "list",
    message: "Whats your license type?",
    name: "license", 
    choices: ["MIT", "APACHE", "GPL", "NONE"]
}, {
    type: "input",
    message: "Whats kind of command should run to install dependencies?",
    name: "installation", 
}, {
    type: "input",
    message: "Whats kind of command should run to test?",
    name: "test", 
}, {
    type: "input",
    message: "What does the user need to know about the usage?",
    name: "usage", 
}, {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing", 
}, 

];

// a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
            console.log('File created successfully!');
    };

// a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Creating your README!!");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    });
    // inquirer.prompt(questions).then((inquirerResponses) => {
    //     console.log(`Generating README...`);
    //     writeToFile("README.md", generateMarkdown); // Write markdown to file
    // });
}

// Function call to initialize app
init();
