'use strict'

const store = require('./../store.js')
const gameEvents = require('../game/events.js')
store.signedIn = false

const signInSuccess = function (response) {
  store.user = response.user
  store.signedIn = true
  console.log('made it to authUi.signInSuccess. store var: ', store.signedIn, store.user)
  gameEvents.onReset()
  $('#history').removeClass('hidden')
  $('#dilemma').addClass('hidden')
  $('#logout').empty()
  $('#number-of-games').empty()
  $('#signed-up').empty()
  $('#notify-user').css('opacity', '1')
  $('#notify-user').html('successfully signed in!')
  $('#notify-user').css('color', '#75A77E')
  $('#notify-user').fadeTo(6000, 0)
  // $('#notify-user').empty()
  $('#signup-form').addClass('hidden')
  $('#signin-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#signout-button').removeClass('hidden')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('html, body').animate({scrollTop: 0}, 1000)
}

const signInFailure = function () {
  $('#signed-in').css('opacity', '1')
  $('#signed-in').html('Sign-in unsuccessful. Please try again or sign up!')
  $('#signed-in').fadeTo(6000, 0)
  $('#signin-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpSuccess = function () {
  $('#logout').empty()
  $('#number-of-games').empty()
  $('#signed-up').html('Successfully signed up! Log in?')
  $('#signup-form').addClass('hidden')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpFailure = function () {
  $('#signed-up').html('Sign up unsuccessful. Please try again or play without logging in.')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#change-password').css('opacity', '1')
  $('#change-password').html('Password changed.')
  $('#change-password').fadeTo(6000, 0)
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#change-password').html('something went wrong. Make sure you are logged in and try again.')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  gameEvents.onReset()
  store.signedIn = false
  $('#logout').html('Sign out successful.')
  $('#history').addClass('hidden')
  $('#dilemma').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#signout-button').addClass('hidden')
  $('#number-of-games').empty()
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signOutFailure = function () {
  $('#logout').html('Something went wrong. Try again?')
  $('#history').addClass('hidden')
  $('#dilemma').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#signout-button').addClass('hidden')
  $('#number-of-games').empty()
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const showAuth = function () {
  $('#signup-form').removeClass('hidden')
  $('#signin-form').removeClass('hidden')
  $('#auth').removeClass('hidden')
  $('#dilemma').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showAuth
}
