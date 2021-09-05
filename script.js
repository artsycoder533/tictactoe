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
		if (gameboardArray[index]) {
			displayMessage("danger");
			return;
		}
		//displayMessage("success");
		gameboardContainer.children[index].textContent = mark;
		gameboardArray[index] = mark;
		console.log(gameboardArray);
	};

	const getBoard = function () {
		return gameboardContainer;
	};

	const displayMessage = function (status, playerName) {
		//console.log(status, playerName);
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
			console.log(getMessage.textContent);
			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove("card__message--success");
			}, 1500);
		}
	};

	const clearBoard = function () {
		gameboardArray.forEach(function (spot, index) {
			spot[index] = "";
			gameboardContainer.children[index].textContent = "";
		});
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
			// playGame();
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
	const player1 = Player("Natasha", "X");
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

	const playGame = function () {
		gameStarted = true;
		if (gameOver === false) {
			let player;
			player = togglePlayer(currentPlayer);
			Gameboard.displayMessage("turn", player.getName());
			Gameboard.updateBoard(player.getMarker(), this.dataset.id);
			checkForWinner(player, player.getMarker());
		}

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

	const checkForWinner = function (player, mark) {
		const arr = Gameboard.getGameBoardArray();
		if (arr[0] === mark && arr[1] === mark && arr[2] === mark) {
			console.log(`${player.getName()} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[3] === mark && arr[4] === mark && arr[5] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[6] === mark && arr[7] === mark && arr[8] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[0] === mark && arr[3] === mark && arr[6] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[1] === mark && arr[4] === mark && arr[7] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[2] === mark && arr[5] === mark && arr[8] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[0] === mark && arr[4] === mark && arr[8] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver === true;
		} else if (arr[2] === mark && arr[4] === mark && arr[6] === mark) {
			console.log(`${mark} player won!`);
			Gameboard.displayMessage("winner", player.getName());
			gameOver = true;
		}
	};
	return { playGame, getPlayer1, getPlayer2, togglePlayer, checkForWinner };
})();
