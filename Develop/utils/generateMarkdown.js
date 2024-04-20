// Function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}`;

}

// Function to render license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      // Add more licenses
    };

    // Return the badge URL corresponding to the license type, if available
    return licenseBadges[license] || '';
  }
  return '';
}

// Function to render license link in the README
function renderLicenseLink(license) {
  if (license) {
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
    };

    // Return the license URL corresponding to the license type, if available
    return licenseLinks[license] || '';
  }
  return '';
}

// Function to render the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return '';
}

module.exports = generateMarkdown;
