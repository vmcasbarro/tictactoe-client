'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')
const authUi = require('../auth/ui.js')
let basicAI = false

const onSelect = function (event) {
  const index = event.target.id
  game.addLetter(index)
  if (basicAI) {
    game.basicAI()
  }
  if (authUi.signedIn) {
    api.sendMove(event)
      .then()
      .catch(ui.sendMoveFailure)
  }
}

const onReset = function () {
  ui.boardUIReset()
  if (authUi.signedIn) {
    api.newGame()
      .then(ui.startGameSuccess)
  }
}

const onGetHistory = function () {
  api.getHistory()
    .then(ui.historySuccess)
    .catch(ui.historyFailure)
}

const onBasicAI = function (event) {
  basicAI = true
}

const onNoAI = function (event) {
  basicAI = false
}

module.exports = {
  onSelect,
  onReset,
  onGetHistory,
  onBasicAI,
  onNoAI,
  basicAI
}
