'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sendMove = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": "0",
          "value": "x"
        },
        "over": "false"
      }
    }
  })
}

module.exports = {
  newGame,
  sendMove
}
