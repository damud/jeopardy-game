const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

const jeopardyCategories = [
    {
        genere: "WHO",
        questions: [
            {
                question: "Who wrote Harry Potter books?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy"
            },
            {
                question: "Who was born on Krypton?",
                answers: ["Aquaman", "Superman"],
                correct: "Superman",
                level: "medium"
            },
            {
                question: "Who designed the first car?",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "hard"
            },
        ],
    },
    {
        genere: "WHERE",
        questions: [
            {
                question: "Where is Buckingham Place",
                answers: ["Richmond", "London"],
                correct: "London",
                level: "easy"
            },
            {
                question: "Where is the Colosseum?",
                answers: ["Rome", "Milan"],
                correct: "Rome",
                level: "medium"
            },
            {
                question: "Where is Mount Kilamanjaro?",
                answers: ["Zimbabwe", "Tanzania"],
                correct: "Tanzania",
                level: "hard"
            },
        ],
    },
    {
        genere: "WHEN",
        questions: [
            {
                question: "When is Christmas",
                answers: ["30th Dec", "24th/25th Dec"],
                correct: "24th/25th Dec",
                level: "easy"
            },
            {
                question: "When was JFK Shot?",
                answers: ["1963", "1961"],
                correct: "1963",
                level: "hard"
            },
            {
                question: "When was WW2?",
                answers: ["1932", "1941"],
                correct: "1941",
                level: "medium"
            },
        ],
    },
    {
        genere: "WHAT",
        questions: [
            {
                question: "What is the capital of Saudi Arabia?",
                answers: ["Jeddah", "Riyadh"],
                correct: "Riyadh",
                level: "hard"
            },
            {
                question: "What do Koalas eat?",
                answers: ["Straw", "Eucalypt"],
                correct: "Eucalypt",
                level: "medium"
            },
            {
                question: "What is a kg short for?",
                answers: ["Kilojovle", "Kilogram"],
                correct: "Kilogram",
                level: "easy"
            },
        ],
    },
    {
        genere: "HOW MANY",
        questions: [
            {
                question: "How many players in a football team?",
                answers: ["15", "11"],
                correct: "11",
                level: "easy"
            },
            {
                question: "How many players in an hour?",
                answers: ["36000", "3600"],
                correct: "3600",
                level: "medium"
            },
            {
                question: "How many people in China?",
                answers: ["1.1 bil", "1.4 bil"],
                correct: "1.4 bil",
                level: "hard"
            },
        ],
    },
]

function addCategory(category) {
    const column = document.createElement('div');
    column.classList.add('genre-column');

    const genreTitle = document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerHTML = category.genre;

    column.appendChild('genreTitle');
    game.append(column);
}

jeopardyCategories.forEach(category => addCategory(category));

