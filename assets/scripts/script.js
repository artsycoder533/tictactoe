const Gameboard = (function () {
	const gameboardContainer = document.querySelector(".card__content");
	const reset = document.getElementById("reset");
	const gameboardArray = Array(9).fill("");

	reset.addEventListener("click", function () {
		clearBoard();
	});

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
		if (gameboardArray[index]) {
			displayMessage("danger");
			return;
		}
		gameboardContainer.children[index].textContent = mark;
		gameboardArray[index] = mark;
	};

	const getBoard = function () {
		return gameboardContainer;
	};

	const displayMessage = function (status, playerName) {
		const getMessage = document.querySelector(".card__message");
		if (status === "danger") {
			getMessage.classList.add(`card__message--${status}`);
			getMessage.textContent = "Spot already taken, please enter a valid move!";

			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove(`card__message--${status}`);
			}, 1500);
		} else if (status === "turn") {
			getMessage.classList.add(`card__message--success`);
			getMessage.textContent = `${playerName}'s' turn!`;

			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove(`card__message--success`);
			}, 1500);
		} else if (status === "winner") {
			getMessage.classList.add("card__message--success");
			getMessage.textContent = `${playerName}'s the winner!!!!!!!!`;

			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove("card__message--success");
			}, 1500);
		} else if (status === "draw") {
			getMessage.classList.add("card__message--success");
			getMessage.textContent = `Its a draw, no winner!`;
			
			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove("card__message--success");
			}, 1500);
		}
	};

	const clearBoard = function () {
		gameboardArray.forEach(function (spot, index) {
			gameboardArray[index] = "";
			gameboardContainer.children[index].textContent = "";
		});

		Game.setGameOver(false);
		//Game.playGame();
	};

	const getGameBoardArray = function () {
		return gameboardArray;
	};

	return {
		displayBoard,
		clearBoard,
		updateBoard,
		getBoard,
		getGameBoardArray,
		displayMessage,
	};
})();

const Player = function (name, marker) {
	this.name = name;
	this.marker = marker;

	const getMarker = function () {
		return marker;
	};
	const getName = function () {
		return name;
	};

	return { getMarker, getName };
};

const Game = (function () {
	const startGame = document.getElementById("start");
	startGame.addEventListener("click", function () {
		if (gameStarted === true) {
			return;
		}
		Gameboard.displayBoard();
		const board = Gameboard.getBoard().children;
		let spaces = [...board];
		spaces.forEach(function (space) {
			space.addEventListener("click", playGame);
			Gameboard.displayMessage("turn", player1.getName());
		});
	});

	const winningPositions = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	];
	const player1 = Player("Player", "X");
	const player2 = Player("Computer", "O");
	let gameStarted = false;
	let gameOver = false;
	let currentPlayer = 2;

	const getPlayer1 = function () {
		return player1;
	};
	
	const getPlayer2 = function () {
		return player2;
	};

	const setGameOver = function (change) {
		gameOver = change;
	};

	const getGameOver = function () {
		return gameOver;
	};
	const playGame = function () {
		//setGameOver(false);
		if (getGameOver() === false) {
			//let player;
			//player = togglePlayer(currentPlayer);
			//Gameboard.displayMessage("turn", player.getName());
			Gameboard.updateBoard(player1.getMarker(), this.dataset.id);
			checkForWinner(player1, player1.getMarker());
			if (getGameOver() === false) {
				Gameboard.updateBoard(player2.getMarker(), getComputerMove());
				checkForWinner(player2, player2.getMarker());
			}
		}
		return;
	};

	const getComputerMove = function () {
		let computerMove = Math.floor(Math.random() * 9);
		let random = Gameboard.getGameBoardArray();
		if (random[computerMove] === "X" || random[computerMove] === "O") {
			while (random[computerMove] === "X" || random[computerMove] === "O") {
				computerMove = Math.floor(Math.random() * 9);
			}
		}
		return computerMove;
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

	const checkForWinner = function (player, mark) {
		const arr = Gameboard.getGameBoardArray();
		if (arr[0] === mark && arr[1] === mark && arr[2] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[3] === mark && arr[4] === mark && arr[5] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[6] === mark && arr[7] === mark && arr[8] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[0] === mark && arr[3] === mark && arr[6] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[1] === mark && arr[4] === mark && arr[7] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[2] === mark && arr[5] === mark && arr[8] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[0] === mark && arr[4] === mark && arr[8] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr[2] === mark && arr[4] === mark && arr[6] === mark) {
			Gameboard.displayMessage("winner", player.getName());
			setGameOver(true);
		} else if (arr.indexOf("") === -1) {
			Gameboard.displayMessage("draw");
			setGameOver(true);
		}
	};
	return {
		playGame,
		getPlayer1,
		getPlayer2,
		togglePlayer,
		checkForWinner,
		getComputerMove,
		setGameOver,
		getGameOver,
	};
})();
