
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
        Gameboard.displayBoard();
        console.log("start game");
        const board = Gameboard.getBoard().children;
        let spaces = [...board];
        spaces.forEach(function (space) {
            space.addEventListener("click", playGame);
        });
    });
	const currentPlayer = "player1";
	const player1 = Player("X");
	const player2 = Player("O");
	const gameOver = false;
	const winner = "";
	const getPlayer1 = function () {
		return player1;
	};
	const getPlayer2 = function () {
		return player2;
	};

    const playGame = function () {
        console.log(this);
        console.log("inside play game");
        Gameboard.updateBoard(getPlayer1().getMarker(), this.dataset.id)
        return;
	};
	const getPlayerTurn = function (currentPlayer) {
		if (currentPlayer === player1) {
			return getPlayer1();
		}
		if (currentPlayer === player2) {
			return getPlayer2();
		}
	};
	//startGame.addEventListener("click", playGame);
	return { playGame, getPlayerTurn, getPlayer1, getPlayer2, getPlayerTurn };
}());



