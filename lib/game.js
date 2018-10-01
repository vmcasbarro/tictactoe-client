'use strict'

// initial modeling in JS goes here

// tic tac toe game logic

// board is array of 9 empty strings, to be filled with 'x' or 'o'
const store = require('../assets/scripts/store.js')
const board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

let over = false

let currentLetter = 'x'
const takeTurns = function () {
  currentLetter === 'o' ? currentLetter = 'x' : currentLetter = 'o'
}

const resetBoard = function () {
  over = false
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  currentLetter = 'x'
}

const addLetter = function (index) {
  if (board[index] === '' && over === false) {
    $('#game-status').empty()
    // takeTurns()
    $(`[data-cell-index=${index}]`).text(`${currentLetter}`)
    game(index)
    takeTurns()
    $('#whose-turn').empty()
    $('#whose-turn').text(currentLetter)
  } else if (over !== true) {
    $('#game-status').text('can\'t move there!')
  }
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
      $('#game-status').text('x wins!')
      over = true
      store.over = over
      return 'x wins'
    } else if (allWinOptions.some(checkO)) {
      $('#game-status').text('o wins!')
      over = true
      store.over = over
      return 'o wins'
    } else if (board.every(each => each !== '')) {
      $('#game-status').text('tie!')
      over = true
      return 'tie'
    }

  }

  const gamePlay = function (move) {
    board[move] = currentLetter
    return board
  }

  gamePlay(move)
  checkForWin(board)
}

// AI STUFF

let move

const pickRandomIndex = function () {
  move = Math.floor(Math.random() * 8)
}

const basicAI = function () {
  if (currentLetter === 'o') {
    // console.log(move)
    pickRandomIndex()
    if (board[move] === '') {
      addLetter(move)
    } else if (over === false) {
      basicAI()
    }
  }
}
//
// const advancedAI = function () {
//   if (/*two os in a row*/) {
//     /*win!*/
//   } else if (/*two xs in a row*/) {
//     /*block x!*/
//   } else {
//
//   }
// }

module.exports = {
  board,
  currentLetter,
  takeTurns,
  game,
  resetBoard,
  addLetter,
  basicAI,
  over
}
