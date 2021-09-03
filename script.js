const gameboardContainer = document.querySelector(".card__content");



const gameboard = (function() {
    const gameboard = Array(9).fill("");
    const displayBoard = function () {
        console.log(gameboard.length);
        
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
    const updateBoard = function () {
        
    };
    return { displayBoard };
})();

function updateBoard() {
    gameboardContainer.children[this.dataset.id].textContent = "X";
}

gameboard.displayBoard();
