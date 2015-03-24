// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "All aboad...",
        "main":    "<p>Are you smart enough to dine with the elite in First Class? Test you knowledge and find out.</p>",
        "level1":  "Awesome job!! First Class, here you come!",
        "level2":  "Good job- Second Class, not so bad!",
        "level3":  "Better luck next time... Looks like your in steerage!",
        "level4":  "Wow! Did you even look at this slider?!"
    },
    "questions": [
        { // Question 1
          "q": "The Grand Staircase was available to all passengers",
          "a": [
              {"option": "Yes",    "correct": false},
              {"option": "No",     "correct": true} // no comma here
          ],
          "correct": "<p><span>Correct!</span> It was restricted to all but First Class Passengers</p>",
          "incorrect": "<p><span>Incorrect</span> It was for the First Class only</p>" // no comma here
        },
        { // Question 2
          "q": "Each second class cabin had a toilet and sink",
          "a": [
              {"option": "Yes",    "correct": false},
              {"option": "No",     "correct": true} // no comma here
          ],
          "correct": "<p><span>Correct!</span> While the cabins had sinks, there were communal toilets</p>",
          "incorrect": "<p><span>Incorrect!</span> Second class cabins had communal toilets</p>" // no comma here
        },
        { // Question 3
          "q": "Titanic's Third Class made up the majority of the passengers",
          "a": [
              {"option": "Yes",    "correct": true},
              {"option": "No",     "correct": false} // no comma here
          ],
          "correct": "<p><span>Correct!</span> There were 708 Third Class passengers</p>",
          "incorrect": "<p><span>Incorrect!</span> The Third class passengers doubled the number of first or second class passengers</p>" // no comma here
        },
        { // Question 4
            "q": "The Titanic was over 950 feet long",
            "a": [
                {"option": "Yes",    "correct": false},
                {"option": "No",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> It was only 882 feet long</p>",
            "incorrect": "<p><span>Incorrect!</span> It was only 882 feet long</p>" // no comma here
        } // no comma here
    ]
};
