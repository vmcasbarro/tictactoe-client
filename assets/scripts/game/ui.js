'use strict'
const game = require('../../../lib/game.js')
const store = require('./../store.js')

const addLetter = function (index) {
  game.takeTurns()
  $(`[data-cell-index=${index}]`).text(`${game.currentLetter}`)
}

const boardUIReset = function () {
  game.resetBoard()
  $('#game-status').empty()
  $('#whose-turn').empty()
  $('#whose-turn').text(game.currentLetter)
  for (let i = 0; i < game.board.length; i++) {
    $(`[data-cell-index=${i}]`).empty()
  }
}

const startGameSuccess = function (response) {
  store.game = response.game
}

const historySuccess = function (response) {
  store.games = response.games
  $('#number-of-games').text(`total games played: ${response.games.length}`)
}

const historyFailure = function () {
  $('#number-of-games').text('Sign up or log in to start recording games!')
}

const sendMoveFailure = function () {
  $('#game-status').text('Something went wrong with server connection. Move not recorded.')
}

const showAIOptions = function () {
  $('#easter').removeClass('hidden')
}

module.exports = {
  addLetter,
  boardUIReset,
  startGameSuccess,
  historySuccess,
  historyFailure,
  sendMoveFailure,
  showAIOptions
}
