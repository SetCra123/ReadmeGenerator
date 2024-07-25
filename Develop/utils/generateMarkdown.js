// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeContent = `https://img.shields.io/badge/licensce-${license}-blue`
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
  return `# ${data.title}\n
          ## ${data.description}\n
          ## ${data.tOfContent}\n
          ## ${data.installation}\n
          ## ${data.usage}\n
          ## ${data.credits}\n
          ## ${data.license}\n
          ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
