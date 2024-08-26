// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeContent = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  return badgeContent
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = markdown link --->go to this badge, look up markdown linksno
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = "" || []
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\
# Description 
${data.description}
# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
# Installation
${data.installation}
# Usage 
${data.usage}
# Credits 
${data.credits}
# License 
${data.license}
${renderLicenseBadge(data.license)}
`;
}


module.exports = generateMarkdown;
