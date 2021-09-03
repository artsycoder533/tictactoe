const gameboardContainer = document.querySelector(".card__content");
const gameboard = (function () {
	const gameboard = Array(9).fill("");

	const displayBoard = function () {
		gameboard.forEach(function (gameSpace, index) {
			gameSpace = document.createElement("article");
			gameSpace.classList.add("card__item");
			gameSpace.addEventListener("click", updateBoard);
			gameSpace.textContent = "";
			gameSpace.dataset.id = index;
			gameboardContainer.appendChild(gameSpace);
			gameboard.push(gameSpace);
		});
	};

    const updateBoard = function (selection, symbol) {
        console.log(selection);
        console.log(symbol);
		gameboardContainer.children[selection].textContent = symbol;
	};
	return { displayBoard, updateBoard };
})();
gameboard.displayBoard();

const Player = function (name, marker) {
	const getName = function (name) {
		return name;
	};
	const getSymbol = function (marker) {
		return marker;
	};
	
	return { name, marker };
};
const natasha = Player("natasha", "X");
natasha.getName;
natasha.getMarker;
console.log(natasha);
gameboard.updateBoard(natasha.getName, natasha.getSymbol);
