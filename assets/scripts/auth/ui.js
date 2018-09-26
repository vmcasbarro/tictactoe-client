'use strict'

const store = require('./../store.js')

const signInSuccess = function (response) {
  store.user = response.user
  $('#signed-in').html('successfully signed in!')
  $('#signed-in').css('color', 'green')
  $('#signin-form').trigger('reset')
  $('#signup-form').addClass('hidden')
  $('#signin-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#signout-button').removeClass('hidden')
}

const signInFailure = function () {
  $('#signed-in').html('sign-in unsuccessful.')
  $('#signed-in').css('color', 'red')
  $('#signin-form').trigger('reset')
}

const signUpSuccess = function () {
  $('#signed-up').html('successfully signed up!')
  $('#signed-up').css('color', 'green')
  $('#signup-form').trigger('reset')
}

const signUpFailure = function () {
  $('#signed-up').html('signup unsuccessful.')
  $('#signed-up').css('color', 'red')
  $('#signup-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#change-password').html('successfully changed password!')
  $('#change-password').css('color', 'green')
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
