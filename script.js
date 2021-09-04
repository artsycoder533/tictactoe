const gameboardContainer = document.querySelector(".card__content");
const startGame = document.querySelector(".card_button");



const Gameboard = (function () {
    const gameboardArray = Array(9).fill("");
	const displayBoard = function () {
		gameboardArray.forEach(function (gameSpace, index) {
			gameSpace = document.createElement("article");
			gameSpace.classList.add("card__item");
			gameSpace.addEventListener("click", updateBoard);
			gameSpace.textContent = gameboardArray[index];
			gameSpace.dataset.id = index;
			gameboardContainer.appendChild(gameSpace);
		});
	};

    const updateBoard = function () {
        //console.log(playerMarker.target);
        //add check if space is empty
        
        if (gameboardArray[this.dataset.id]) {
            displayMessage("danger");
            return;
        }
        displayMessage("success");
        gameboardContainer.children[this.dataset.id].textContent = "N";
        gameboardArray[this.dataset.id] = "N";
        console.log(gameboardArray);
    };

    const displayMessage = function (status) {
        const getMessage = document.querySelector(".card__message");
        if (status === "danger") {
            getMessage.classList.add(`card__message--${status}`);
            getMessage.textContent = "Spot already take, please enter a valid move!";
            getMessage.classList.add(`card__message--${status}`);
            setTimeout(function () {
                getMessage.textContent = "";
                getMessage.classList.remove(`card__message--${status}`);
            }, 1500);
        }
        else {
            getMessage.classList.add(`card__message--${status}`);
            getMessage.textContent = "Valid move!";
            getMessage.classList.add(`card__message--${status}`);
            setTimeout(function () {
                getMessage.textContent = "";
                getMessage.classList.remove(`card__message--${status}`);
            }, 1500);
        }
    };

    const clearBoard = function () {
        gameboardArray.forEach(function(spot, index){
            spot[index] = "";
            gameboardContainer.children[index].textContent = "";
        });
    }
    
	return { displayBoard, clearBoard, updateBoard};
}());
Gameboard.displayBoard();

const Player = function (name, marker, selection) {
    //const {displayBoard} = Gameboard(selection)
	const getName = function () {
		return name;
	};
	const getMarker = function () {
		return marker;
    };
    const getSelection = function () {
        return selection;
        //gameboardContainer.children[id].textContent = symbol;
    };
    //const { updateBoard } = Gameboard.updateBoard();
    
	return { getName, getMarker, getSelection};
};
const player1 = Player("natasha", "X");
const player2 = Player("computer", "O");

//gameboard.updateBoard(player1.getName(), player1.getMarker())

const Game = (function (playerA, playerB) {
    const gameOver = false;
    const winner = "";
    const playGame = function () {
        while (!winner && gameOver) {
            console.log(playerA.getMarker());
            playerA.updateBoard();
        }
    }
    const getPlayerTurn = function () {
        //console.log(Player.getMarker());
        //Gameboard.updateBoard(Player.getMarker());
    }
    return { playGame, getPlayerTurn};
})();

// Game.playGame(player1, player2);

const Foo = (function () {
    
})();