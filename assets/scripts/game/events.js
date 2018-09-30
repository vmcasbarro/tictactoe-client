'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')

const onSelect = function (event) {
  const index = event.target.id
  game.addLetter(index)

  api.sendMove(event)
    .then()
    .catch(ui.sendMoveFailure)
}

const onReset = function () {
  ui.boardUIReset()
  api.newGame()
    .then(ui.startGameSuccess)
}

const onGetHistory = function () {
  api.getHistory()
    .then(ui.historySuccess)
    .catch(ui.historyFailure)
}

module.exports = {
  onSelect,
  onReset,
  onGetHistory
}
