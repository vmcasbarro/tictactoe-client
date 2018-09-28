'use strict'

const store = require('./../store.js')
const gameEvents = require('../game/events.js')


const signInSuccess = function (response) {
  store.user = response.user
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
}

const signInFailure = function () {
  $('#signed-in').css('opacity', '1')
  $('#signed-in').html('Sign-in unsuccessful. Please try again or sign up!')
  $('#signed-in').css('color', 'red')
  $('#signed-in').fadeTo(6000, 0)
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpSuccess = function () {
  $('#logout').empty()
  $('#number-of-games').empty()
  $('#signed-up').html('Successfully signed up! Log in?')
  $('#signed-up').css('color', '#75A77E')
  $('#signup-form').addClass('hidden')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signUpFailure = function () {
  $('#signed-up').html('Sign up unsuccessful. Please try again or play without logging in.')
  $('#signed-up').css('color', 'red')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#change-password').css('opacity', '1')
  $('#change-password').html('Password changed.')
  $('#change-password').css('color', 'green')
  $('#change-password').fadeTo(6000, 0)
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#change-password').html('something went wrong. Make sure you are logged in and try again.')
  $('#change-password').css('color', 'red')
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  gameEvents.onReset()
  $('#logout').html('you are successfully signed out.')
  $('#history').addClass('hidden')
  $('#signup-form').removeClass('hidden')
  $('#signin-form').removeClass('hidden')
  $('#dilemma').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#signout-button').addClass('hidden')
  $('#number-of-games').empty()
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
