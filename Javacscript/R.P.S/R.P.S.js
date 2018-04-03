function game(RPS) { return document.getElementById(RPS); }

var score = [0,0,0],
    compare = function (userChoice) {
        var computerPicks = ['Rock','Paper','Scissors'];
        var computerChoice = computerPicks[Math.floor(Math.random() * 3)];
        var WinnerScore = ['You win :)','Computer wins :(','Tie :|'];
        var Winner = 0;

        if (userChoice === computerChoice) {Winner = 2; }
        if ( (userChoice == 'Rock')  && (computerChoice == 'Scissors') ) { Winner = 0; }
        if ( (userChoice == 'Paper') && (computerChoice == 'Rock') )     { Winner = 0; }
        if ( (userChoice == 'Scissors') && (computerChoice == 'Paper') ) { Winner = 0; }
        if ( (userChoice == 'Rock')  && (computerChoice == 'Paper') )    { Winner = 1; }
        if ( (userChoice == 'Paper') && (computerChoice == 'Scissors') ) { Winner = 1; }
        if ( (userChoice == 'Scissors') && (computerChoice == 'Rock') )  { Winner = 1; }
        score[Winner]++;
        game("computer").innerHTML = "Computer chooses: " + computerChoice;
        game("computer").innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+WinnerScore[Winner];
        game("result").innerHTML = '<p>Scores:<br>You = '+score[0]+'  Computer = '+score[1]+'  Ties = '+score[2];

    };