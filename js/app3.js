var quiz = {
    // an array of all the questions. if using _.template() use something like
    //
    // `var questionDiv = _.template($('#questionTemplate'), quiz.question[currentTurn]);`
    //
    questions: [
        { 
            // if you want to put the string "1. " in front of these 
            // then use a bit of code to tack on the currentTurn 
            questionText: "What was the first US national park?", 
            choices: [
                "Joshua Tree",
                "Grand Canyon",
                "Yellowstone",
                "Yosemite"
            ],
            correctAnswer: 2,
            successText: "Correct! The first US national park was Yellowstone national park and was made so in 1872.",
            failureText: "Incorrect. The first US national park was Yellowstone national park and was made so in 1872."
        },
        
        {
            questionText: "What is the newest US national park?",
            choices: [
                "Mammoth Cave",
                "Pinnacles",
                "Mount Rainier",
                "Zion"
            ],
            correctAnswer: 1,
            successText: "Correct! Pinnacles national monument was made a national park by President Barack Obama on January 10, 2013.",
            failureText: "Incorrect. Pinnacles national monument was made a national park by President Barack Obama on January 10, 2013."
        },
        
        {
            questionText: "Which US president was responsible for the first national park?",
            choices: [
                "Ulysses S. Grant",
                "Thomas Jefferson",
                "Abraham Lincoln",
                "William McKinley"
            ],
            correctAnswer: 0,
            successText: "Correct! President Ulysses S. Grant signed the Act of Dedication law that created Yellowstone national park on March 1, 1872.",
            failureText: "Incorrect. President Ulysses S. Grant signed the Act of Dedication law that created Yellowstone national park on March 1, 1872."
        },
        
        {
            questionText: "Which naturalist helped preserve Yosemite Valley, founded The Sierra Club and is considered the 'Father of the National Parks?'",
            choices: [
                "John Muir",
                "Theodore Roosevelt",
                "Henry David Thoreau",
                "Ralph Waldo Emerson"
            ],
            correctAnswer: 0,
            successText: "Correct! John Muir was one of the earliest advocates for wildlife and nature preservation in the United States. He was responsible for the National Park bill that was passed by US Congress in 1890 preserving Yosemite and Sequoia national parks.",
            failureText: "Incorrect. John Muir was one of the earliest advocates for wildlife and nature preservation in the United States. He was responsible for the National Park bill that was passed by US Congress in 1890 preserving Yosemite and Sequoia national parks."
        },
        
        {
            questionText: "What is the northernmost national park in the US?",
            choices: [
                "Denali",
                "Gates of the Arctic",
                "Glacier Bay",
                "Grand Teton"
            ],
            correctAnswer: 1,
            successText: "Correct! 'Gates of the Arctic' is the US' northernmost national park. It is located in Alaska and is not accesible by road. Visitors must walk in or use an air taxi.",
            failureText: "Incorrect. 'Gates of the Arctic'is the US' northernmost national park. It is located in Alaska and is not accesible by road. Visitors must walk in or use an air taxi."
        }
 
    ],
 
     // currentTurn can be 0, 1, 2, 3, or 4...start at 0 like an array index
     // use this as an index into the questions array
    currentTurn: 0,
 
    // currentScore can be 0 to 5
    currentScore: 0
};



function startQuiz() {
    $(".intro").fadeOut(100);
    $(".questions").prepend(quiz.questions[0].questionText);
    $(".questions").fadeIn(1000);
    $(".images").prepend("<img src='images/yellowstone.gif'>");
    $(".images").fadeIn(1000);
    $(".answers").fadeIn(1000);
    $(".choice1 button").prepend(quiz.questions[0].choices[0]);
    $(".choice2 button").prepend(quiz.questions[0].choices[1]);
    $(".choice3 button").prepend(quiz.questions[0].choices[2]);
    $(".choice4 button").prepend(quiz.questions[0].choices[3]);
    $(".footer").fadeIn(1000);
    $(".next").hide();
    $(".score span").prepend(quiz.currentScore);
}

function getAnswer() {
    if(quiz.currentTurn >= quiz.questions.length - 1) {
        lastQuestion();
    } else {
    var indexClicked = $(this).parent().index();
    if(quiz.questions[quiz.currentTurn].correctAnswer === indexClicked) {
        $(".answers ul li button").attr("disabled", "disabled");
        $(".questions").empty();
        $(".questions").prepend(quiz.questions[quiz.currentTurn].successText);
        quiz.currentScore++;
        $(".score span").text(quiz.currentScore);
    } else {
        $(".questions").empty();
        $(".questions").prepend(quiz.questions[quiz.currentTurn].failureText);
    }
         $(".next").fadeIn(1000);

    }
};

function lastQuestion() {
    var indexClicked = $(this).parent().index();
    if(quiz.questions[quiz.currentTurn].correctAnswer === indexClicked) {
        $(".answers ul li button").attr("disabled", "disabled");
        $(".questions").empty();
        $(".questions").prepend(quiz.questions[quiz.currentTurn].successText);
        quiz.currentScore++;
        $(".score span").text(quiz.currentScore);
    } else {
        $(".questions").empty();
        $(".questions").prepend(quiz.questions[quiz.currentTurn].failureText);
    }
    $(".summary button").fadeIn(1000);
};
    

function nextQuestion() {
    $(".next").fadeOut(1000);
    quiz.currentTurn++;
    $(".count span").text(quiz.currentTurn + 1);
    $(".questions").empty();
    $(".questions").prepend(quiz.questions[quiz.currentTurn].questionText);
    $(".answers ul li button").empty();
    $(".choice1 button").prepend(quiz.questions[quiz.currentTurn].choices[0]);
    $(".choice2 button").prepend(quiz.questions[quiz.currentTurn].choices[1]);
    $(".choice3 button").prepend(quiz.questions[quiz.currentTurn].choices[2]);
    $(".choice4 button").prepend(quiz.questions[quiz.currentTurn].choices[3]);
    $(".answers ul li button").removeAttr("disabled", "disabled");
}

function finalScore() {
        $(".answers").fadeOut(1000);
        $(".questions").empty();
        $(".questions").prepend("You got " + quiz.currentScore + " questions right!");
        if (quiz.currentScore <= 3) {
        $(".final").text("You should go and see more of America's national parks!");
    } else {
        $(".final").text("Great score! You know a lot about America's national parks!");
    }
    $(".final").fadeIn(1000);
}

$(document).ready(function() {
    $(".startquiz").on("click", startQuiz);
    $(".answers ul li button").on("click", getAnswer);
    $(".next button").on("click", nextQuestion);
    $(".summary button").on("click", finalScore);
    
});