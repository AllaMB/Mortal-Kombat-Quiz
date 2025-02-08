// Quiz questions and answers
const quiz = [
    {
        question: "Who is the original creator of the MK tournament?",
        choices: ["Raiden", "Shao Kahn", "Shang Tsung", "The Elder Gods"],
        correctAnswer: "The Elder Gods",
    },
    {
        question: "What was the original release year of the first MK game?",
        choices: ["1991", "1992", "1994", "1995"],
        correctAnswer: "1992",
    },
    {
        question: "Which MK character was the first female fighter?",
        choices: ["Sonya Blade", "Kitana", "Sindel", "Jade"],
        correctAnswer: "Sonya Blade",
    },
    {
        question: "Who is the creator of the MK franchise?",
        choices: ["Ed Boon", "John Tobias", "Tom and Jerry", "Hideo Kojima"],
        correctAnswer: "Ed Boon",
    },
    {
        question: "Which MK character is known for the phrase 'Get over here!'?",
        choices: ["Sub-Zero", "Johnny Cage", "Scorpion", "Liu Kang"],
        correctAnswer: "Scorpion",
    },
    {
        question: "What realm does Shao Kahn rule?",
        choices: ["Earthrealm", "Outworld", "Netherrealm", "Edenia"],
        correctAnswer: "Outworld",
    },
    {
        question: "Which character is the mother of Cassie Cage?",
        choices: ["Sonya Blade", "Jade", "Kitana", "Sindel"],
        correctAnswer: "Sonya Blade",
    },
    {
        question: "What Mortal Kombat character was originally designed to be a secret character in the first game?",
        choices: ["Scorpion", "Reptile", "Shang Tsung", "Raiden"],
        correctAnswer: "Reptile",
    },
    {
        question: "What is the name of Raiden’s signature electric attack?",
        choices: ["Thunderstrike", "Electric Fly", "Lightning Bolt", "Storm Call"],
        correctAnswer: "Lightning Bolt",
    },
    {
        question: "Who is the leader of the Shokan race?",
        choices: ["Goro", "Kintaro", "Shang Tsung", "Shao Kahn"],
        correctAnswer: "Goro",
    },
    {
        question: "Which character uses ice-based attacks?",
        choices: ["Raiden", "Sub-Zero", "Kano", "Noob Saibot"],
        correctAnswer: "Sub-Zero",
    },
    {
        question: "What finishing move is MK famous for?",
        choices: ["Fatality", "KO", "Brufality", "Ultimate Strike"],
        correctAnswer: "Fatality",
    },
    {
        question: "Which character is a Hollywood movie star?",
        choices: ["Johnny Cage", "Sonya Blade", "Ashrah", "Jade"],
        correctAnswer: "Johnny Cage",
    },
    {
        question: "What is the name of the dragon logo in Mortal Kombat?",
        choices: ["Orochi", "Shenlong", "Mortal Dragon", "Dragon of the Elder Gods"],
        correctAnswer: "Dragon of the Elder Gods",
    },
    {
        question: "Who is the sworn enemy of Sub-Zero?",
        choices: ["Scorpion", "Raiden", "Quan Chi", "Baraka"],
        correctAnswer: "Scorpion",
    },
    {
        question: "Which actor was the inspiration for Johnny Cage?",
        choices: ["Arnold Schwarzenegger", "Jean-Claude Van Damme", "Chuck Norris", "Bruce Lee"],
        correctAnswer: "Jean-Claude Van Damme",
    },
    {
        question: "Which character is an elder god of thunder?",
        choices: ["Raiden", "Fujin", "Kung Lao", "Shinnok"],
        correctAnswer: "Raiden",
    },
    {
        question: "What is the name of Liu Kang’s signature move?",
        choices: ["Bicycle Kick", "Dragon Fire", "Shadow Kick", "Ice Ball"],
        correctAnswer: "Bicycle Kick",
    },
    {
        question: "Which character wields a razor-sharp hat?",
        choices: ["Kung Lao", "Raiden", "Baraka", "Kotal Kahn"],
        correctAnswer: "Kung Lao",
    },
    {
        question: "Which character was a monk and a martial artist?",
        choices: ["Johnny Cage", "Kung Lao", "Liu Kang", "Stryker"],
        correctAnswer: "Liu Kang",
    },
    {
        question: "Which actress provided both the likeness and voice for Nitara?",
        choices: ["Demi Moore", "Jessica Chastain", "Angelina Jolie", "Megan Fox"],
        correctAnswer: "Megan Fox",
    },
    {
        question: "What is the name of the character who can shapeshift into other fighters?",
        choices: ["Kano", "Reptile", "Shang Tsung", "Quan Chi"],
        correctAnswer: "Shang Tsung",
    },
    {
        question: "Who is the ruler of the Netherrealm?",
        choices: ["Raiden", "Shao Kahn", "Quan Chi", "Shinnok"],
        correctAnswer: "Shinnok",
    },
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

const humorousResponses = [
    "Nope, Shang Tsung would be disappointed.",
    "That's not it! Shao Kahn laughs at your answer.",
    "Wrong! Even Scorpion wouldn't pull punches like that.",
    "Close, but you're as lost as Johnny Cage in Outworld.",
    "Not quite. Better luck in the next realm.",
    "Fatality failed. Try again, mortal.",
    "Scorpion's spear couldn't save you from that answer.",
    "That's not the correct answer... but nice try, warrior.",
    "Finish him! Unfortunately, that answer was 'not quite'.",
    "Oops, you missed it! Shao Kahn is laughing from the throne.",
    "Think! Think!",
    "Nope, the realms are mine...",
];

// Function to start the quiz
function startQuiz() {
    // Hide the start button container
    document.getElementById("start-container").style.display = "none";
    // Hide the tagline
    document.getElementById('tagline').style.display = 'none';

    // Show the quiz container
    document.getElementById("quizContainer").style.display = "block";

    // Start displaying the first question
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    hasAnswered = false;
    document.getElementById("question").innerHTML = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const btn = document.getElementById(`choice${i + 1}`);
        btn.innerHTML = currentQuestion.choices[i];
        btn.value = currentQuestion.choices[i];
        btn.disabled = false; // Enable buttons
    }
    document.getElementById("result").innerHTML = ""; // Clear previous result
    document.getElementById("nextButton").disabled = true; // Disable Next until answered
    document.getElementById("skipButton").disabled = false; // Enable Skip button
}

// Update the score displayed on the page
function updateScore() {
    document.getElementById("score").innerHTML = score;
}

// Check the selected answer
function checkAnswer(button) {
    const currentQuestion = quiz[currentQuestionIndex];
    if (button.value === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("result").innerHTML = "Correct! Finish him!";
        updateScore(); // Update score
        disableChoices();
        document.getElementById("nextButton").disabled = false;
    } else {
        const randomIndex = Math.floor(Math.random() * humorousResponses.length);
        document.getElementById("result").innerHTML = humorousResponses[randomIndex];
        disableChoices();
        document.getElementById("nextButton").disabled = false;
    }
    hasAnswered = true;
}

// Disable all choices after answering
function disableChoices() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).disabled = true;
    }
}

// Go to the next question
function nextQuestion() {
    if (!hasAnswered) {
        document.getElementById("result").innerHTML = "Quitality? Come on, try harder.";
        return; // Don't go to the next question until answered
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        displayQuestion();
        document.getElementById("nextButton").style.display = "inline-block";
        document.getElementById("skipButton").style.display = "inline-block";
    } else {
        document.getElementById("question").innerHTML = `Quiz Completed!`;
        document.getElementById("choices").style.display = "none";
        document.getElementById("nextButton").style.display = "none";// Hide next button when done
        document.getElementById("skipButton").style.display = "none"; // Hide skip button when done
        document.getElementById("result").innerHTML = `Your final score is ${score}/${quiz.length}. You FINISHED IT!`;
        document.getElementById("retryButton").style.display = "block"; // Show Retry button
    }
}

// Skip the current question
function skipQuestion() {
    if (!hasAnswered) {
        document.getElementById("result").innerHTML = "Quitality? Come on, try again.";
        nextQuestion();
        document.getElementById("nextButton").style.display = "inline-block";
        document.getElementById("skipButton").style.display = "inline-block";
    }
}

// Retry the quiz
function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("retryButton").style.display = "none"; // Hide Retry button
    document.getElementById("choices").style.display = "block";
    document.getElementById("nextButton").style.display = "inline-block";
    document.getElementById("skipButton").style.display = "inline-block";
    displayQuestion(); // Start the quiz again
}

document.getElementById("startButton").addEventListener("click", function () {
    const audio = document.getElementById("background-audio");
    audio.play().catch((error) => console.error("Audio play error:", error));
});
