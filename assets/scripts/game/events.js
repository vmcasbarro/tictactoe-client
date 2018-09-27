'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')

const onSelect = function (event) {
  //console.log(event.target.id)
  const index = event.target.id
  game.addLetter(index)
}

const onReset = function () {
  ui.boardUIReset()
}

module.exports = {
  onSelect,
  onReset
}
