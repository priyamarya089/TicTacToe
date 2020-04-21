const playerOne = 'X';
const playerTwo = 'O';

class TicTacToeGame {
    checkGameWinner() {
        for(let i=0;i<9;i=i+3){
            if(this.board[i]!= "" && this.board[i+1]!= "" && this.board[i+2]!=""){
                if(this.board[i] == this.board[i+1] && this.board[i+1] == this.board[i+2])return true;
            }
        }
        for(let i=0;i<3;i++){
            if(this.board[i]!= "" && this.board[i+3]!= "" && this.board[i+6]!=""){
                if(this.board[i] == this.board[i+3] && this.board[i+3] == this.board[i+6])return true;
            }
        }
        if(this.board[0]!= "" && this.board[4]!= "" && this.board[8]!=""){
            if(this.board[0] == this.board[4] && this.board[4] == this.board[8])return true;
        }
        if(this.board[2]!= "" && this.board[4]!= "" && this.board[6]!=""){
           if(this.board[2] == this.board[4] && this.board[4] == this.board[6])return true;
        }
        return false;
    }

    updateBoard() {
        let gameBoard = document.getElementById('gameBoard');
        let squareElements = gameBoard.childNodes;
        // console.log(squareElements);
        squareElements.forEach((element, index) => {
            if (element.innerText != this.board[index]) {
                element.innerText = this.board[index];
            }
        });
    }


    handleclick(event) {
        let clickedId = event.target.id;
        if (this.board[clickedId] == "") {
            this.board[clickedId] = this.currentPlayer;
            this.updateBoard();
            if (!this.checkGameWinner()) {
                if (this.currentPlayer == playerOne) {
                    this.currentPlayer = playerTwo;
                } else {
                    this.currentPlayer = playerOne;
                }
            } else {
                alert('Player ' + this.currentPlayer + ' is the winner');
                //Resart the game
                this.start();
            }
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
new TicTacToeGame();
game.start();