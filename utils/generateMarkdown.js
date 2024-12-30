// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } if (answers.license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else {
    return `No license`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === ' MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(answers)+renderLicenseLink(answers)}` 
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}


## Description
${answers.description}

## Table of Contents:
- [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
## Installation

${answers.install}

## Interaction

${answers.interact}

## Contributions

${answers.contributions}

## Testing

${answers.tests}

## License
${renderLicenseSection(answers)}

## Questions
- [If you have any questions,email me here.](mailto:${answers.email})
- [My GitHub Profile](https://www.github.com/${answers.github})
`;
}

module.exports = generateMarkdown;