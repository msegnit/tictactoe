function init() {

board = [null, null, null, null, null, null, null, null, null];

};

init();

let idx = evnt.target.id.replace("sq", "")
if (board[idx] === null) {
    board[idx] = player
    player *= -1
    player === -1 ? (playerName = "p1") : (playerName = "p2")
    winner = checkForWin()
    if (winner) fillBoardWithWinner(winner)
    turn++
}
preRender()

function checkForWin() {
    if()
board = [0] + [1] + [2] === 3 ||
board = [3] + [4] + [5] === 3 ||
board = [6] + [7] + [8] === 3 ||
board = [0] + [3] + [6] === 3 ||
board = [1] + [4] + [7] === 3 ||
board = [2] + [5] + [8] === 3 ||
board = [0] + [4] + [8] === 3 ||
board = [2] + [4] + [6] === 3 ||     
    
}


