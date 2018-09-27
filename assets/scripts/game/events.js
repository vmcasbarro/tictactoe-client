'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')

const onSelect = function (event) {
  const index = event.target.id
  game.addLetter(index)

  api.sendMove()
    .then(console.log)
    .catch(console.log)
}

const onReset = function () {
  ui.boardUIReset()
  api.newGame()
    .then(ui.startGameSuccess)
}

module.exports = {
  onSelect,
  onReset
}
