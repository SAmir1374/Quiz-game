const data = [
    {
        id: 1,
        question: "How old are you ?",
        answres: [
            { answer: "19", isCorrect: true },
            { answer: "21", isCorrect: false },
            { answer: "37", isCorrect: false },
            { answer: "23", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Hwhat is your name ?",
        answres: [
            { answer: "Amir", isCorrect: true },
            { answer: "Muhammad", isCorrect: false },
            { answer: "Ali", isCorrect: false },
            { answer: "Hossien", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "where are you from ?",
        answres: [
            { answer: "Tehran", isCorrect: true },
            { answer: "Mashad", isCorrect: false },
            { answer: "Qom", isCorrect: false },
            { answer: "Shiraz", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const quiz = document.querySelector(".quiz");
const asnwarsContainer = document.querySelector(".asnwars");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectAnswarer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    selectAnswarer;
    showQuiz(qIndex);
};

play.addEventListener('click' , () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResultPage = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = `Correct Answers : ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers : ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Score : ${(correctCount - wrongCount) * 10}`;
};

const selectAns = () => {
    asnwarsContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectAnswarer = e.target.value;
        });
    });
};

const showQuiz = (qNumber) => {
    if (qIndex === data.length) return showResultPage();
    selectAnswarer = null;
    quiz.textContent = data[qNumber].question;
    asnwarsContainer.innerHTML = data[qIndex].answres
        .map(
            (item, index) =>
                `
        <div class="ans">
            <input type="radio" name="answar" id=${index} value=${item.isCorrect} />
            <label for=${index}>${item.answer}</label>
        </div>
        `
        )
        .join("");

    selectAns();
};

const submitasn = () => {
    submit.addEventListener("click", () => {
        if (selectAnswarer !== null) {
            selectAnswarer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuiz(qIndex);
        } else {
            alert("Slect answare");
        }
    });
};

showQuiz(qIndex);
submitasn();
