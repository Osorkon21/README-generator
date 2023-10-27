// generates Table of Contents for README
function getTableOfContents() {
  return `* [Description](#description)

  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)`
}

// generates badge image and link for project's license
function getLicenseBadge(license) {
  switch (license) {
    case 0:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-MIT-yellow.svg)](${getLicenseLink(license)})`;
    case 1:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-GPL_v2-blue.svg)](${getLicenseLink(license)})`;
    case 2:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${getLicenseLink(license)})`;
    case 3:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-GPLv3-blue.svg)](${getLicenseLink(license)})`;
    case 4:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${getLicenseLink(license)})`;
    case 5:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/license-Unlicense-blue.svg)](${getLicenseLink(license)})`;
    case 6:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](${getLicenseLink(license)})`;
    case 7:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${getLicenseLink(license)})`;
    case 8:
      return `[![License: ${getLicenseName(license)}](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${getLicenseLink(license)})`;
    default:
      return "";
  }
}

// gets name for project's license
function getLicenseName(license) {
  switch (license) {
    case 0:
      return "MIT";
    case 1:
      return "GPL v2";
    case 2:
      return "Apache 2.0";
    case 3:
      return "GPL v3";
    case 4:
      return "BSD 3-clause";
    case 5:
      return "Unlicense";
    case 6:
      return "BSD 2-clause";
    case 7:
      return "LGPL v3";
    case 8:
      return "AGPL v3";
  }
}

// gets URL for project's license
function getLicenseLink(license) {
  switch (license) {
    case 0:
      return "https://opensource.org/licenses/MIT";
    case 1:
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case 2:
      return "https://opensource.org/licenses/Apache-2.0";
    case 3:
      return "https://www.gnu.org/licenses/gpl-3.0";
    case 4:
      return "https://opensource.org/licenses/BSD-3-Clause";
    case 5:
      return "https://opensource.org/license/unlicense/";
    case 6:
      return "https://opensource.org/licenses/BSD-2-Clause";
    case 7:
      return "https://www.gnu.org/licenses/lgpl-3.0";
    case 8:
      return "https://www.gnu.org/licenses/agpl-3.0";
  }
}

// generates project's license info for README
function getLicenseSection(license) {
  if (license === 9)
    return "This project is not licensed. Copyright law fully applies. All rights reserved.";
  else
    return `This project uses the [${getLicenseName(license)}](${getLicenseLink(license)}) license.`;
}

// generates contact info for README
function getQuestionsSection(gitHub, email) {
  return `[${gitHub}'s GitHub Profile](https://github.com/${gitHub})
  
Email any additional questions to <${email}>`
}

// generates pre-formatted README contents
function generateMarkdown(response) {
  return `# ${response.title} ${getLicenseBadge(response.license)}

  ## Description

  ${response.description}

  ## Table of Contents

  ${getTableOfContents()}

  ## Installation

  ${response.installation}

  ## Usage

  ${response.usage}

  ## License

  ${getLicenseSection(response.license)}

  ## Contributing

  ${response.contributing}

  ## Tests

  ${response.tests}

  ## Questions

  ${getQuestionsSection(response.gitHub, response.email)}

  `;
}

// export generateMarkdown function
module.exports = generateMarkdown;
