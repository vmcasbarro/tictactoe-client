'use strict'
const game = require('../../../lib/game.js')

// not working, use fxn in game.js
const addLetter = function (index) {
  console.log(game.currentLetter)
  game.takeTurns()
  console.log(game.currentLetter)
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

module.exports = {
  addLetter,
  boardUIReset
}
