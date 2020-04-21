class TicTacToeGame {
    drawBoard(){
        document.body.innerHTML = "";
        let gameBoard =document.createElement('div');
        gameBoard.id='gameBoard';
        gameBoard.classList.add('board');

        this.board.forEach((square , index) => {
            let sqareElement  = document.createElement('div');
            sqareElement.id = index;
            sqareElement.classList.add('square');
            gameBoard.appendChild(sqareElement);
        })

        document.body.appendChild(gameBoard);
    }

    start() {
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.drawBoard();
    }
}

const game = new TicTacToeGame();
game.start();