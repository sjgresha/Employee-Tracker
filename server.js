const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

const connection =  mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '', //my password
    database: 'employee_db'
});

