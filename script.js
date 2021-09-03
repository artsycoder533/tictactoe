const gameboardContainer = document.querySelector(".card__content");
const startGame = document.querySelector(".card_button");


const gameboard = (function () {
    const gameboardArray = Array(9).fill("");
	const displayBoard = function () {
		gameboardArray.forEach(function (gameSpace, index) {
			gameSpace = document.createElement("article");
			gameSpace.classList.add("card__item");
			gameSpace.addEventListener("click", updateBoard);
			gameSpace.textContent = "";
			gameSpace.dataset.id = index;
			gameboardContainer.appendChild(gameSpace);
		});
	};

    const updateBoard = function () {
        //add check if space is empty
        if (gameboardArray[this.dataset.id]) {
            displayMessage("danger");
            return;
        }
        gameboardContainer.children[this.dataset.id].textContent = "N";
        gameboardArray[this.dataset.id] = "N";
        console.log(gameboardArray);
    };

    const displayMessage = function (status) {
        const getMessage = document.querySelector(".card__message");
        getMessage.classList.add(`card__message--${status}`);
        getMessage.textContent = "Spot already take, please enter a valid move!";
        getMessage.classList.add(`card__message--${status}`);
        setTimeout(function () {
            getMessage.textContent = "";
            getMessage.classList.remove(`card__message--${status}`);
        }, 1500);
        
    }
    
	return { displayBoard};
})();
gameboard.displayBoard();

const Player = function (name, marker) {
	const getName = function () {
		return name;
	};
	const getMarker = function () {
		return marker;
    };
    const getSelection = function () {
        gameboardContainer.children[id].textContent = symbol;
    }
	return { getName, getMarker, getSelection };
};
const player1 = Player("natasha", "X");
const player2 = Player("computer", "O");

//gameboard.updateBoard(player1.getName(), player1.getMarker());