/*
Author: Anas Nasrallah.
Peupose: Mongoose Expenses project.
Date: 11.05.20
*/

/* =======================================================
This file generates the database. It should run only once.
=========================================================*/ 

const data = require('./expenses.json')
const Expense = require("./model/expense.js")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/expensesDB")

for(let document of data){
    let expense = new Expense(document)
    expense.save()
}

/* =======================================================
Run the following code if you need to delete all the data.
=========================================================*/

// Expense.deleteMany({}).then(function(){
//     console.log("Done")
// })

/* =======================================================
Run the following code if you need to see the existing data.
=========================================================*/

// Expense.find({}).then(function(expenses){
//     console.log('here')
//     console.log(expenses)
// })