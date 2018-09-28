'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)

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
    .catch(console.log)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  //onSign

}
