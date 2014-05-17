/*---Each question is its own object with question, rightAnswer, wrongAnswer and choice properties.---*/

var questionOne = {
    question: "1. What was the first US national park?",
    rightAnswer: "Correct! The first US national park was Yellowstone national park and was made so in 1872.",
    wrongAnswer: "Incorrect. The first US national park was Yellowstone national park and was made so in 1872.",
    choice1: "Joshua Tree",
    choice2: "Grand Canyon",
    correct: "Yellowstone",
    choice3: "Yosemite"
};

var questionTwo = {
    question: "2. What is the newest US national park?",
    rightAnswer: "Correct! Pinnacles national monument was made a national park by President Barack Obama on January 10, 2013.",
    wrongAnswer: "Incorrect. Pinnacles national monument was made a national park by President Barack Obama on January 10, 2013.",
    choice1: "Mammoth Cave",
    correct: "Pinnacles",
    choice2: "Mount Rainier",
    choice3: "Zion"
};

var questionThree = {
    question: "3. Which US president was responsible for the first national park?",
    rightAnswer: "Correct! President Ulysses S. Grant signed the Act of Dedication law that created Yellowstone national park on March 1, 1872.",
    wrongAnswer: "Incorrect. President Ulysses S. Grant signed the Act of Dedication law that created Yellowstone national park on March 1, 1872.",
    correct: "Ulysses S. Grant",
    choice1: "Thomas Jefferson",
    choice2: "Abraham Lincoln",
    choice3: "William McKinley"
};

var questionFour = {
    question: "4. Which naturalist helped preserve Yosemite Valley, founded The Sierra Club and is considered the 'Father of the National Parks?'",
    rightAnswer: "Correct! John Muir was one of the earliest advocates for wildlife and nature preservation in the United States. He was responsible for the National Park bill that was passed by US Congress in 1890 preserving Yosemite and Sequoia national parks.",
    wrongAnswer: "Incorrect. John Muir was one of the earliest advocates for wildlife and nature preservation in the United States. He was responsible for the National Park bill that was passed by US Congress in 1890 preserving Yosemite and Sequoia national parks.",
    correct: "John Muir",
    choice1: "Theodore Roosevelt",
    choice2: "Henry David Thoreau",
    choice3: "Ralph Waldo Emerson"
};

var questionFive = {
    question: "5. What is the northernmost national park in the US?",
    rightAnswer: "Correct! 'Gates of the Arctic'is the US' northernmost national park. It is located in Alaska and is not accesible by road. Visitors must walk in or use an air taxi.",
    wrongAnswer: "Incorrect. 'Gates of the Arctic'is the US' northernmost national park. It is located in Alaska and is not accesible by road. Visitors must walk in or use an air taxi.",
    choice1: "Denali",
    correct: "Gates of the Arctic",
    choice2: "Glacier Bay",
    choice3: "Grand Teton"
};

/*---The questions and their responses are put into an array---*/

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var score = $(".score span");

function startQuiz() {
    $(".intro").fadeOut(100);
    $(".questions").prepend(questions[0].question);
    $(".questions").fadeIn(1000);
    $(".images").fadeIn(1000);
    $(".images").prepend("<img src='images/yellowstone.gif'/>");
    $(".answers").fadeIn(1000);
    $(".choice1 button").prepend(questions[0].choice1);
    $(".choice2 button").prepend(questions[0].choice2);
    $(".choice3 button").prepend(questions[0].correct);
    $(".choice4 button").prepend(questions[0].choice3);
    $(".footer").fadeIn(1000);
}

function rightAnswerOne() {
    $(".questions").empty();
    $(".questions").prepend(questions[0].correct);
    score ++;
    $(".next").fadeIn(1000);
}

function wrongAnswerOne() {
    $(".questions").empty();
    $(".questions").prepend(questions[0].wrongAnswer);
    $(".next").fadeIn(1000);
}



$(document).ready(function() {
    $(".startquiz").on("click", startQuiz);
    $(".answers ul li button").on("click", function() {
        if ($("this") === questions[0].correct) {
            rightAnswerOne();
            } else {
            wrongAnswerOne();
            }
    });
        
    });