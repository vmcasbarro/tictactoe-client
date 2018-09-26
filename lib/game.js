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

// global variable to keep track of each letter
let currentLetter

//example array of moves (index of board pieces) to be fed into the game
const arrayOfMoves = [0, 4, 8, 2, 6, 3, 7, 5, 1]


// given a string of nine x/o, loop through each
// when there is a row of three, end game and return "x/o wins!"
// if there are no rows of three, end game and return "tie!"

const game = function (moves) {

  const checkForWin = function (board) {
    // takes entire board
    // check for 3 x in a row
    // check for 3 o in a row
    // if either, return who won!
  }

  const gamePlay = function (move) {
    //takes 1 move
    // starts with x
    //
    // assigns 'x' to board[move]
    // switches to o

    currentLetter === 'x' ? currentLetter = 'o' : currentLetter = 'x'

    board[move] = currentLetter

  }

  moves.forEach(gamePlay)
  console.log(board)
  return board


}

game(arrayOfMoves)
