'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

$(() => {
  // AUTH
  $('#signup-form').on('submit', authEvents.onSignUp)
  $('#signin-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#signout-button').on('click', authEvents.onSignOut)
  // work-in-progress
  // $('#sign-form').on('submit', authEvents.onSign)

  // GAME
  $(`[data-cell-index=0]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=1]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=2]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=3]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=4]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=5]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=6]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=7]`).on('click', gameEvents.onSelect)
  $(`[data-cell-index=8]`).on('click', gameEvents.onSelect)

  $('#reset-button').on('click', gameEvents.onReset)

  $('#advanced-ai').change(gameEvents.onAdvancedAI)
  $('#basic-ai').change(gameEvents.onBasicAI)
  $('#no-ai').change(gameEvents.onNoAI)

  $('#history').on('click', gameEvents.onGetHistory)
  $('#reveal-auth').on('click', authEvents.onShowAuth)

  // EASTER EGG
  $('#octothorp').on('click', gameEvents.onEasterEgg)

  // SMOOTH SCROLLING
  // snippet from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', authEvents.smoothScroll)

})
