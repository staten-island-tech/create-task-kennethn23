const DOMSelectors = {
    content: document.querySelector(".content"),
    button: document.querySelector(".playButton"),
    rock: document.querySelector("#rock"),
    paper: document.querySelector("#paper"),
    scissors: document.querySelector("#scissors"),
}


function rockPaperScissors (input) {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    let opponentChoice;

    if (random == 0) {
        opponentChoice = choices[0];
    } else if (random == 1) {
        opponentChoice = choices[1];
    } else if (random == 2) {
        opponentChoice = choices[2];
    }


};

DOMSelectors.rock.addEventListener("click", function () {
    rockPaperScissors(0);
});

DOMSelectors.paper.addEventListener("click", function () {
    rockPaperScissors(1);
});

DOMSelectors.scissors.addEventListener("click", function () {
    rockPaperScissors(2);
});