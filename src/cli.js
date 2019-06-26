#!/usr/bin/env node
// @flow
// @format

'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const calculateAvailability = require('../lib/calculate-availability').calculateAvailability
const log = console.log

// colors
const error = chalk.bold.red
const warning = chalk.keyword('orange')

const isNumber = function(value) {
  let isValidRegexp = /\d/.test(value)
  let isValidType = typeof value === 'number'

  if (isValidType && isValidRegexp) {
    return true
  }
  return 'Please enter a number 🔢 you rebel 👩‍🎤'
}

let questions = [
  {
    type: 'number',
    name: 'meetingHours',
    message: 'How many hrs are scheduled for meetings or other stuff this week?',
    validate: isNumber,
  },
  {
    type: 'number',
    name: 'workingHours',
    message: 'How many hrs will you be working this week?',
    validate: isNumber,
  },
]

const ask = function() {
  inquirer.prompt(questions).then(answers => {
    log(`
      ${chalk.blue(calculateAvailability(answers.meetingHours, answers.workingHours))}`)
  })
}

ask()
