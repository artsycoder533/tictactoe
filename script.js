
const Gameboard = (function () {
	const gameboardContainer = document.querySelector(".card__content");
    const gameboardArray = Array(9).fill("");
	const displayBoard = function () {
		gameboardArray.forEach(function (gameSpace, index) {
			gameSpace = document.createElement("article");
			gameSpace.classList.add("card__item");
			gameSpace.textContent = gameboardArray[index];
			gameSpace.dataset.id = index;
			gameboardContainer.appendChild(gameSpace);
		});
	};

	const updateBoard = function (mark, index) {
        console.log(mark, index);
		if (gameboardArray[index]) {
			displayMessage("danger");
			return;
		}
		displayMessage("success");
		gameboardContainer.children[index].textContent = mark;
		gameboardArray[index] = mark;
		console.log(gameboardArray);
	};

	const getBoard = function () {
		return gameboardContainer;
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
		} else {
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
		gameboardArray.forEach(function (spot, index) {
			spot[index] = "";
			gameboardContainer.children[index].textContent = "";
		});
	};

	return { displayBoard, clearBoard, updateBoard, getBoard };
}());


const Player = function (marker) {
    this.marker = marker;
	const getMarker = function () {
		return marker;
    };

	return { getMarker};
};

const Game = (function () {
    const startGame = document.getElementById("start");
    startGame.addEventListener("click", function () {
        if (gameStarted === true) {
            return;
        }
        Gameboard.displayBoard();
        console.log("start game");
        const board = Gameboard.getBoard().children;
        let spaces = [...board];
        spaces.forEach(function (space) {
            space.addEventListener("click", playGame);
        });
    });
    const winningPositions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
	const player1 = Player("X");
	const player2 = Player("O");
	let gameStarted = false;
    const winner = "";
    let currentPlayer = 2;
	const getPlayer1 = function () {
		return player1;
	};
	const getPlayer2 = function () {
		return player2;
	};
  
    const playGame = function () {
        gameStarted = true;
        console.log(currentPlayer);
        Gameboard.updateBoard(togglePlayer(currentPlayer).getMarker(), this.dataset.id);
        return;
	};
	const togglePlayer = function () {
        if (currentPlayer === 1) {
            currentPlayer++;
			return getPlayer2();
		}
        if (currentPlayer === 2) {
            currentPlayer--;
			return getPlayer1();
		}
    };
    
    const checkForWinner = function () {
        
    }
	//startGame.addEventListener("click", playGame);
	return { playGame, getPlayer1, getPlayer2, togglePlayer, checkForWinner };
}());



