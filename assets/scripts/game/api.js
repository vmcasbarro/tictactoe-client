'use strict'
const config = require('./../config.js')
const store = require('./../store.js')
const game = require('./../../../lib/game.js')
const gameEvents = require('./events.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sendMove = function (event) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": event.target.id,
          "value": $(event.target).text()
        },
        "over": store.over
      }
    }
  })
}

const getHistory = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  sendMove,
  getHistory
}
