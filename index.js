
// ## Getting Started

// * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// * Refer to the[Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

//     * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it.This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


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
    type: "input",
    message: "Enter a description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions for your project.",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter usage instructions for your project.",
    name: "usage"
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    name: "license",
    choices: [
      {
        name: "MIT",
        value: 0
      },
      {
        name: "GPLv2",
        value: 1
      },
      {
        name: "Apache 2.0",
        value: 2
      },
      {
        name: "GPLv3",
        value: 3
      },
      {
        name: "BSD 3-clause",
        value: 4
      },
      {
        name: "Unlicense",
        value: 5
      },
      {
        name: "BSD 2-clause",
        value: 6
      },
      {
        name: "LGPLv3",
        value: 7
      },
      {
        name: "AGPLv3",
        value: 8
      },
      {
        name: "No license",
        value: 9
      },
    ]
  },
  {
    type: "input",
    message: "Enter contribution instructions for your project.",
    name: "contributing"
  },
  {
    type: "input",
    message: "Enter test instructions for your project.",
    name: "tests"
  },
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "gitHub"
  },
  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  }
];

function writeREADME(contents) {
  fs.writeFile("README.md", contents, (err) => { err ? console.error(err) : console.log("README.md created!") });
}

async function init() {
  const response = await inquirer.prompt(questions);
  const contents = generateMarkdown(response);
  writeREADME(contents);
}

init();
