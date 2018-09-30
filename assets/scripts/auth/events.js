'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  store.user.token = null
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

//work-in-progress
// const onSign = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   if (event.) {
//     api.signIn(data)
//       .then(ui.signInSuccess)
//       .catch(ui.signInFailure)
//   } else if (button-click-is-UP) {
//     api.signUp(data)
//       .then(ui.signUpSuccess)
//       .catch(ui.signUpFailure)
//   }
// }

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)

}

const onShowAuth = function () {
  ui.showAuth()
}

const smoothScroll = function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    let target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000, function () {
        // Callback after animation
        // Must change focus!
        const $target = $(target)
        $target.focus()
        if ($target.is(':focus')) { // Checking if the target was focused
          return false
        } else {
          $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
          $target.focus() // Set focus again
        }
      })
    }
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowAuth,
  smoothScroll
  //onSign

}
