// ## Acceptance Criteria

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// ## Getting Started

// * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// * Refer to the[Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

//     * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it.This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

// questions, inquirer prompt

// Description "input" description
// Table of Contents
// Installation "editor" installation
// Usage "editor" usage
// License "list" license

// MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// GPLv2 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// Apache [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// BSD 3-clause [![License: BSD 3-clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://opensource.org/license/unlicense/)
// BSD 2-clause [![License: BSD 2-clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
// LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
// AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
// No license

// Contributing "editor" contributing
// Tests "editor" tests
// Questions "input" gitHub, "input" email

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// write questions for app
const questions = [
  {
    type: "input",
    message: "What is the title of this project?",
    name: "title"
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password"
  }
];

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name"
//     },
//     {
//       type: "list",
//       message: "What's your favorite language?",
//       name: "language",
//       choices: [
//         {
//           name: "JavaScript",
//           value: 1
//         },
//         {
//           name: "PHP",
//           value: 2
//         }
//       ]
//     },
//     {
//       type: "checkbox",
//       message: "How can we contact you?",
//       name: "contact",
//       choices: [
//         "E-mail",
//         "Phone",
//         "Carrier pigeon"
//       ]
//     }
//   ]);

function writeREADME(contents) {
  fs.writeFile("README.md", JSON.stringify(contents), (err) => { err ? console.error(err) : console.log("README.md created!") });
}

async function init() {
  const response = await inquirer.prompt(questions);
  console.log(response); // or JSON.stringify(response);

  const contents = generateMarkdown(response);
  writeREADME(contents);
}

init();
