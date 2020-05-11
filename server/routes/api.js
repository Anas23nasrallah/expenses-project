/*
Author: Anas Nasrallah.
Peupose: Mongoose Expenses project.
Date: 11.05.20
*/

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const moment = require('moment')
const Expense = require("../../model/expense.js")
mongoose.connect("mongodb://localhost/expensesDB")

router.get('/expenses/:d1?/:d2?', function (request, response) {
    Expense.find({}).sort(
        { date: -1 }).then(function (expenses) {
            if (request.query.d1) {
                let upperDate;
                if (!request.query.d2) {
                    upperDate = moment().format('LLLL');
                } else {
                    upperDate = d2;
                }
                for (let i in expenses) {
                    if (expenses[i]['date'] < d1) {
                        expenses.splice(i)
                        break
                    }
                }
                for (let i in expenses) {
                    if (expenses[i]['date'] <= upperDate) {
                        expense = expenses.splice(i)
                        break
                    }
                }
            }
            response.send(expenses)
        })
})

router.post('/new', function (request, response) {
    const item = request.body['name'];
    const amount = request.body['amount'];
    const group = request.body['group'];
    const date = moment().format('LLLL');
    const newExpense = new Expense({
        item: item,
        amount: amount,
        date: date,
        group: group
    })
    newExpense.save()
    response.send()
})

router.put('/update/:group1/:group2', function (request, response) {
    const group1 = request.params['group1']
    const group2 = request.params['group2']
    Expense.updateOne({ group: group1 }, { group: group2 }, function () {
        response.end()
    })
})

router.get('/expenses/:group', function (request, response) {
    const group = request.params['group']
    console.log(group)
    Expense.find({
        group: group
    }).then(function (expenses) {
        response.send(expenses)
    })
})

module.exports = router