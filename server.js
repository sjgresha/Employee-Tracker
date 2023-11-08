// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '', //my password
    database: 'employee_db'
});

connection.connect((error) => {
    if (error) throw error
    console.log('Successfully connected to database')
    initialPrompt();//Name to something else
});

function initialPrompt() {
    const startQuestions = [{ //Change name?
        type: 'list',
        name: 'startUp',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ]
    }];

    inquirer.createPromptModule(startQuestions)
        .then(response => {
            switch (response.action) {
                case 'View all departments':
                    viewDeparments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Quit':
                    connection.end();
                    break;
                default:
                    console.log('An unknown error occurred');
                    process.exit(1);
            }
        })
};
