'use strict'
const game = require('../../../lib/game.js')

// not working, use fxn in game.js
const addLetter = function (index) {
  console.log(game.currentLetter)
  game.takeTurns()
  console.log(game.currentLetter)
  $(`[data-cell-index=${index}]`).text(`${game.currentLetter}`)
}



module.exports = {
  addLetter
}
