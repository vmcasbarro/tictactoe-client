'use strict'

// tic tac toe game logic

// board is array of 9 empty strings, to be filled with 'x' or 'o'
const store = require('../assets/scripts/store.js')
const board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

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

const game = function (move) {

  const checkForWin = function (board) {

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
    } else {
      store.over = false
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
    pickRandomIndex()
    if (board[move] === '') {
      addLetter(move)
    } else if (over === false) {
      basicAI()
    }
  }
}

const findTheWinScenarioForX = function () {
  const whichOne = allWinOptions.find(function (winArray) {
    const boardMoves = winArray.map(each => board[each])
    const emptySlot = boardMoves.findIndex(item => item === '')
    const numberOfX = boardMoves.filter(each => each === 'x').length
    return emptySlot !== -1 && numberOfX === 2
  })
  return whichOne
}

const findTheWinScenarioForO = function () {
  const whichOne = allWinOptions.find(function (winArray) {
    const boardMoves = winArray.map(each => board[each])
    const emptySlot = boardMoves.findIndex(item => item === '')
    const numberOfX = boardMoves.filter(each => each === 'o').length
    return emptySlot !== -1 && numberOfX === 2
  })
  return whichOne
}

const advancedAI = function () {
  if (currentLetter === 'o') {
    const offenseTarget = findTheWinScenarioForO()
    const defenseTarget = findTheWinScenarioForX()
    if (offenseTarget) {
      const boardMoves = offenseTarget.map(each => board[each])
      const emptySlot = boardMoves.findIndex(item => item === '')
      move = emptySlot
      addLetter(offenseTarget[move])
    } else if (defenseTarget) {
      const boardMoves = defenseTarget.map(each => board[each])
      const emptySlot = boardMoves.findIndex(item => item === '')
      move = emptySlot
      addLetter(defenseTarget[move])
    } else {
      basicAI()
    }
  }
}

module.exports = {
  board,
  currentLetter,
  takeTurns,
  game,
  resetBoard,
  addLetter,
  basicAI,
  over,
  move,
  pickRandomIndex,
  findTheWinScenarioForX,
  findTheWinScenarioForO,
  advancedAI

}
