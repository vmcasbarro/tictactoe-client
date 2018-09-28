'use strict'

const store = require('./../store.js')

const signInSuccess = function (response) {
  store.user = response.user
  $('#logout').empty()
  $('#notify-user').css('opacity', '1')
  $('#notify-user').html('successfully signed in!')
  $('#notify-user').css('color', '#75A77E')
  $('#notify-user').fadeTo(6000, 0)
  // $('#notify-user').empty()
  $('#signin-form').trigger('reset')
  $('#signed-up').empty()
  $('#signup-form').addClass('hidden')
  $('#signin-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#signout-button').removeClass('hidden')
}

const signInFailure = function () {
  $('#signed-in').css('opacity', '1')
  $('#signed-in').html('Sign-in unsuccessful. Please try again or sign up!')
  $('#signed-in').css('color', 'red')
  $('#signed-in').fadeTo(6000, 0)
  $('#signin-form').trigger('reset')
}

const signUpSuccess = function () {
  $('#logout').empty()
  $('#signed-up').html('Successfully signed up! Log in?')
  $('#signed-up').css('color', '#75A77E')
  $('#signup-form').trigger('reset')
  $('#signup-form').addClass('hidden')
}

const signUpFailure = function () {
  $('#signed-up').html('Sign up unsuccessful. Please try again or play without logging in.')
  $('#signed-up').css('color', 'red')
  $('#signup-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#change-password').css('opacity', '1')
  $('#change-password').html('Password changed.')
  $('#change-password').css('color', 'green')
  $('#change-password').fadeTo(6000, 0)
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#change-password').html('something went wrong. Make sure you are logged in and try again.')
  $('#change-password').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#logout').html('you are successfully signed out.')
  $('#signup-form').removeClass('hidden')
  $('#signin-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#signout-button').addClass('hidden')
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
