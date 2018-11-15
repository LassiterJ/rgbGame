let numSquares = 6;
let colors = [];
let pickedColor;
const h1 = document.querySelector("h1");
const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
const modeButtons = document.querySelectorAll(".mode");



init();

function init() {
    setupModeButtons();
    setupSquaresButtons();
    reset();
};
function setupSquaresButtons(){
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            //  grab color of clicked  square
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    };
}
function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        // mode buttons event listeners
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();

        });
    };

}
function reset() {
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // reset "Play Again" to "New Colors"
    resetButton.textContent = "New Colors";
    // remove messages after reset
    messageDisplay.textContent = "";
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});



for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function () {

        //  grab color of clicked  square
        let clickedColor = this.style.backgroundColor;

        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });

};

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;

    }
};

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
};

function generateRandomColors(num) {
    // make and array
    let arr = []
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        // get random color push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
};

function randomColor() {
    // pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
