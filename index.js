// Libraries necesary to run the app

const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


// Other files invoked for running the app

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const HtmlGn = require("./lib/HtmlGn.js");

// Arrayes for storing information

const employees = [];
const engineers = [];
const interns = [];
const managers = [];
let id = 0;
var response;

// Running prump for asking user for employee information
// It runs a switch in order to generate questions for diferent types of employees

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Name ?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your Email ?",
        name: "email"
      },
      {
        type: "list",
        name: "role",
        message: "What's Your Position At The Company?",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(function (data) {
      switch (data.role) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                message: "What is your employee ID ? ",
                name: "id"
              },
              {
                type: "input",
                message: "What is your  office number ? ",
                name: "office"
              }
            ])
            .then(function (res) {
              const officeNum = res.office;
              const manager = new Manager(
                data.name,
                res.id,
                data.email,
                officeNum,
                "Manager"
              );
              employees.push(manager);
            }).then(function () {
              addFollow()
            });
          break;
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                message: "what is your employee ID ? ",
                name: "id"
              },
              {
                type: "input",
                message: "what is your github username ? ",
                name: "github"
              }
            ])
            .then(function (res) {
              const githubName = res.github;
              const engineer = new Engineer(
                data.name,
                res.id,
                data.email,
                githubName,
                "Engineer"
              );
              employees.push(engineer);
            }).then(function () {
              addFollow()
            });
          break;
        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                message: "whats your employee ID ? ",
                name: "id"
              },
              {
                type: "input",
                message: "witch school did you attend ? ",
                name: "school"
              }
            ])
            .then(function (res) {
              const internSchool = res.school;
              const intern = new Intern(
                data.name,
                res.id,
                data.email,
                internSchool,
                "Intern"
              );
              employees.push(intern);
            }).then(function () {
              addFollow()
            });
          break;
      }
    })
    .then(function () {
    });
};

// Finall function for asking user if he wants to add another employee

const addFollow = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newemp",
        message: "Would You Like To Add Another Employee?",
        choices: ["Yes", "No"],
      }
    ])

    // finall function for generating html file
    .then(function (res) {
      if (res.newemp === "Yes") {
        promptUser();
      } else {
        console.log("Finish Roster");
        const html = HtmlGn(employees);

        fs.writeFile('./dist/employees.html', html, (err) =>
          err ? console.log(err) : console.log('Roster Html Successfully created!')
        );
      }
    });
};



function init() {
  console.log("Please enter employee information")
  promptUser();
};

init();
