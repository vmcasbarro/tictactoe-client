'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // AUTH
  $('#signup-form').on('submit', authEvents.onSignUp)
  $('#signin-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#signout-button').on('click', authEvents.onSignOut)

  //GAME
  $('#0').on('click', gameEvents.onSelect)
  $('#1').on('click', gameEvents.onSelect)
  $('#2').on('click', gameEvents.onSelect)
  $('#3').on('click', gameEvents.onSelect)
  $('#4').on('click', gameEvents.onSelect)
  $('#5').on('click', gameEvents.onSelect)
  $('#6').on('click', gameEvents.onSelect)
  $('#7').on('click', gameEvents.onSelect)
  $('#8').on('click', gameEvents.onSelect)
})
