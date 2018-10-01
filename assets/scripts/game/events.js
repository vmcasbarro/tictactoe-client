'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const game = require('../../../lib/game.js')
const authUi = require('../auth/ui.js')
let basicAI = false
let advancedAI = false

const onSelect = function (event) {
  const index = event.target.id
  game.addLetter(index)
  if (basicAI) {
    game.basicAI()
  } else if (advancedAI) {
    game.advancedAI()
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
  advancedAI = false
}

const onNoAI = function (event) {
  basicAI = false
  advancedAI = false
}

const onAdvancedAI = function (event) {
  advancedAI = true
  basicAI = false
}

const onEasterEgg = function (event) {
  ui.showAIOptions()
}

module.exports = {
  onSelect,
  onReset,
  onGetHistory,
  onBasicAI,
  onNoAI,
  basicAI,
  onAdvancedAI,
  advancedAI,
  onEasterEgg
}
