const Gameboard = (function () {
	const date = document.querySelector(".date");
	const card = document.querySelector(".card");
	const gameboardContainer = document.querySelector(".card__content");
	const reset = document.getElementById("reset");
	const gameboardArray = Array(9).fill("");

	date.textContent = new Date().getFullYear();
	reset.addEventListener("click", function () {
		clearBoard();
	});

	const displayBoard = function () {
		reset.classList.add("hide");
		card.classList.add("show");
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
			Game.playGame();
		} else if (status === "turn") {
			getMessage.classList.add(`card__message--success`);
			getMessage.textContent = `${playerName}'s' turn!`;

			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove(`card__message--success`);
			}, 1500);
		} else if (status === "winner") {
			getMessage.classList.add("card__message--success");
			getMessage.classList.add("enlarge");
			getMessage.textContent = `${playerName}'s the winner!!!!!!!!`;
			reset.classList.remove("hide");

			setTimeout(function () {
				getMessage.textContent = "";
				getMessage.classList.remove("card__message--success");
				getMessage.classList.add("enlarge");
			}, 2500);
		} else if (status === "draw") {
			getMessage.classList.add("card__message--success");
			getMessage.textContent = `Its a draw, no winner!`;
			reset.classList.remove("hide");

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
		reset.classList.add("hide");
		Game.setGameOver(false);
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
	const getName = function (){
		return this.name;
	}
	const setName = function (newName) {
		this.name = newName;
	}
	return {getName, getMarker, setName };
};


const Game = (function () {
	const playGameBtn = document.getElementById("play");
	const modal = document.querySelector(".modal");
	const input = document.getElementById("name");
	let gameOver = false;
	let currentPlayer = 2;
	let playerName = input.value;
	const player = Player("Player", "X");
	const computer = Player("Computer","O");
	
	const showIntro = function () {
		modal.classList.add("show");
	}

	window.addEventListener("DOMContentLoaded", showIntro);

	playGameBtn.addEventListener("click", function (e) {
		e.preventDefault();
		playerName = input.value;
		player.setName(playerName);
		computer.setName("Computer");
		setGameOver(false);
		modal.classList.remove("show");
		Gameboard.displayBoard();
		const board = Gameboard.getBoard().children;
		let spaces = [...board];
		spaces.forEach(function (space) {
			space.addEventListener("click", playGame);
		});
	});
	
	const getPlayer = function () {
		return player;
	};
	
	const getComputer = function () {
		return computer;
	};

	const setGameOver = function (change) {
		gameOver = change;
	};

	const getGameOver = function () {
		return gameOver;
	};
	const playGame = function () {
		if (getGameOver() === false) {
			Gameboard.updateBoard(player.getMarker(), this.dataset.id);
			checkForWinner(player, player.getMarker());
			if (getGameOver() === false) {
				setTimeout (function () {
					Gameboard.updateBoard(computer.getMarker(), getComputerMove());
					checkForWinner(computer, computer.getMarker());
				}, 500);
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
			return getcomputer();
		}
		if (currentPlayer === 2) {
			currentPlayer--;
			return getPlayer();
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
		getPlayer,
		getComputer,
		togglePlayer,
		checkForWinner,
		getComputerMove,
		setGameOver,
		getGameOver,
	};
})();

