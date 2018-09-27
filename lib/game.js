'use strict'

// initial modeling in JS goes here

// API EXPECTED INPUT
// {
//   "game": {
//     "id": 3,
//     "cells": ["","","","","","","","",""],
//     "over": false,
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//     },
//     "player_o": null
//   }
// }


// tic tac toe game logic

// board is array of 9 empty strings, to be filled with 'x' or 'o'
const board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

let currentLetter
const takeTurns = function () {
  currentLetter === 'x' ? currentLetter = 'o' : currentLetter = 'x'
}

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  currentLetter = ''
  console.log(board)
}

// global variable to keep track of each letter


// given a string of nine x/o, loop through each
// when there is a row of three, end game and return "x/o wins!"
// if there are no rows of three, end game and return "tie!"

const game = function (move) {

  const checkForWin = function (board) {

    // hard coded win options
    const row0 = [0, 1, 2]
    const row1 = [3, 4, 5]
    const row2 = [6, 7, 8]
    const column0 = [0, 3, 6]
    const column1 = [1, 4, 7]
    const column2 = [2, 5, 8]
    const diagSlash = [6, 4, 2]
    const diagBackslash = [0, 4, 8]

    // array of win option arrays
    const allWinOptions = [row0, row1, row2, column0, column1, column2, diagSlash, diagBackslash]

    const checkEachX = function (letter) {
      return letter === 'x'
    }

    const checkEachO = function (letter) {
      return letter === 'o'
    }

    const checkX = function (winArray) {
      const boardMoves = winArray.map(each => board[each])
      return boardMoves.every(checkEachX)
    }

    const checkO = function (winArray) {
      const boardMoves = winArray.map(each => board[each])
      return boardMoves.every(checkEachO)
    }

    if (allWinOptions.some(checkX)) {
      console.log('x wins!')
      return 'x wins'
    } else if (allWinOptions.some(checkO)) {
      console.log('o wins!')
      return 'o wins'
    } else if (board.every(each => each !== '')) {
      console.log('tie!')
      return 'tie'
    }

  }

  const gamePlay = function (move) {

    takeTurns()
    board[move] = currentLetter

    console.log(board)
    return board

  }

  gamePlay(move)
  checkForWin(board)
  // right now checkForWin is running after all moves, not per turn


  // return board


}



module.exports = {
  board,
  currentLetter,
  takeTurns,
  game,
  resetBoard
}
