'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')

const onSelect = function (event) {
  //console.log(event.target.id)
  const index = event.target.id
  game.addLetter(index)
  const data = getFormFields(event.target)
  api.sendMove(index)
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
