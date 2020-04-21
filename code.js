const playerOne = 'X';
const playerTwo = 'O';

class TicTacToeGame {
    updateBoard(){
        let gameBoard = document.getElementById('gameBoard');
        let squareElements = gameBoard.childNodes;
        console.log(squareElements);
        squareElements.forEach((element , index )=>{
            if(element.innerText != this.board[index]){
                element.innerText = this.board[index];
            }
        });
    }


    handleclick(event) {
        let clickedId = event.target.id;
        if (this.board[clickedId] == "") {
            this.board[clickedId] = this.currentPlayer;
            if (this.currentPlayer == playerOne) {
                this.currentPlayer = playerTwo;
            } else {
                this.currentPlayer = playerOne;
            }
            this.updateBoard();
        }
    }


    drawBoard() {
        document.body.innerHTML = "";
        let gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard';
        gameBoard.classList.add('board');
        gameBoard.addEventListener('click', this.handleclick.bind(this));

        this.board.forEach((square, index) => {
            let sqareElement = document.createElement('div');
            sqareElement.id = index;
            sqareElement.classList.add('square');
            gameBoard.appendChild(sqareElement);
        })

        document.body.appendChild(gameBoard);
    }

    start() {
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = playerOne;
        this.drawBoard();
    }
}

const game = new TicTacToeGame();
game.start();