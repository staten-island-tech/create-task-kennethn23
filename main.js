const DOMSelectors = {
    content: document.querySelector(".content"),
    rock: document.querySelector("#rock"),
    paper: document.querySelector("#paper"),
    scissors: document.querySelector("#scissors"),
    historyButton: document.querySelector("#history"),
    history: document.querySelector(".history"),
}
const history = [];

function returnInput (input) {
    let output;

    if (input == 0) {
        output = "rock";
    } else if (input == 1) {
        output = "paper";
    } else {
        output = "scissors";
    }

    return output;
};

function rockPaperScissors (input) {
    const random = Math.floor(Math.random() * 3);
    let opponentChoice;
    let outcome;

    if (random == 0) {
        opponentChoice = "rock";
        if (input == 1) {
            outcome = "win";
        } else if (input == 2) {
            outcome = "lose";
        } else {
            outcome = "draw";
        }
    } else if (random == 1) {
        opponentChoice = "paper";
        if (input == 2) {
            outcome = "win";
        } else if (input == 0) {
            outcome = "lose";
        } else {
            outcome = "draw";
        }
    } else if (random == 2) {
        opponentChoice = "scissors";
        if (input == 0) {
            outcome = "win";
        } else if (input == 1) {
            outcome = "lose";
        } else {
            outcome = "draw";
        }
    }
    history.push(outcome.toUpperCase());

    DOMSelectors.history.innerHTML = "";
    DOMSelectors.content.insertAdjacentHTML("afterbegin", 
    `<p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    `)
};

function getHistory () {
    DOMSelectors.content.innerHTML = "";
    DOMSelectors.history.innerHTML = "";
    let win = 0;
    let lose = 0;
    let draw = 0;

    for (let i = 0; i < history.length; i++) {
        if (history[i] == "WIN") {
            win++;
        } else if (history[i] == "LOSE") {
            lose++;
        } else {
            draw++;
        }

        DOMSelectors.history.insertAdjacentHTML("afterbegin",
        `<h4>Game ${i + 1}: ${history[i]}</h4>`)
    }

    DOMSelectors.history.insertAdjacentHTML("afterbegin",
        `<h2>Wins: ${win} | Losses: ${lose} | Draws: ${draw}</h2>`)
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

DOMSelectors.historyButton.addEventListener("click", function () {
    getHistory();
})