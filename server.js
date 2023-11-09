const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '', //insert your own password
    database: 'employees_db'
});

connection.connect((error) => {
    if (error) throw error
    console.log('Successfully connected to database')
    initialPrompt();
});

function initialPrompt() {
    const initialQuestions = [{
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

    inquirer.prompt(initialQuestions)
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

//Functions for each prompt

function viewDeparments() {
    connection.query('SELECT * FROM department', (error, res) => {
        if (error) throw error;
        console.table(res);
        initialPrompt();
    })
};

function viewRoles() {
    const queryRoles =
        `SELECT roles.id, roles.title, department.name AS department, roles.hourly
    FROM roles
    LEFT JOIN department ON roles.department_id = department.id`;

    connection.query(queryRoles, (error, res) => {
        if (error) throw error;
        console.table(res);
        initialPrompt();
    })
};

function viewEmployees() {
    //Need to add 
};

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name the new department.',
        }
    ])
        .then((response) => {
            connection.query('INSERT INTO department SET ?', response, (error) => {
                if (error) throw error;
                console.log('Department successfully added!');
                showPrompt();
            })
        })
};

function addRole() {
    //Need to add 
};

function addEmployee() {
    //Need to add 
};

function updateEmployeeRole() {
    //Need to add 
};
