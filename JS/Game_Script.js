//Declare all variables
var score;
var timeleft = 60;
var correctAnswer;
var timer;
var playing = false;


/* 
Declare all function
1. stopTimer
2. generateQuestion&Answer
3. showOption
4. startTimer
5. hide
6. show


*/

//Writing the function
//show
function show(id){
    document.getElementById(id).style.display = "block";
}

//hide
function hide(id){
    document.getElementById(id).style.display ="none";

}


//start Timer
function startTimer(){
    timer = setInterval(function(){
        --timeleft;
        show("timeremaining");
        show("score0");
        document.getElementById("timeremainingvalue").innerText = timeleft;
        if(timeleft == 0){
            //stop Timer
            stopTimer();

            //Display the game over div
            show("gameOver0");
            hide("score0");

            playing == false;
            clearText();
            
            document.getElementById("gameOver0").innerHTML = "<p style = 'margin-top: 40px;'>Game Over!!</p><p style = 'font-family: monospace; text-transform: uppercase;'>Your score is " + score +" </p>";
            document.getElementById("timeremaining").innerHTML = "<p style = 'padding: 1px; width: 120px; margin-bottom: 5px; margin-top: 5px;'>Session Ended!!!</p>";

            
        }
    }, 1000);
    
}

//stoptimer
function stopTimer (){
    clearInterval(timer);
}
/* 
startTimer(); */


generateQandA
function generateQandA(){
    //generate two random numbers between 1 and 10 1 - 10
    var fnum = 1 + Math.floor(Math.random() * 10); //4
    var snum = 1 + Math.floor(Math.random() * 10); //5
    correctAnswer = fnum * snum;
    document.getElementById("question").innerText = fnum + " x " + snum;

    var answers = [correctAnswer];
    var randompositions = [];

    //generate the wrong answers
    while (answers.length < 4) {

        var wrongAnswer = 1 + Math.floor(Math.random() * 99);
        if (wrongAnswer != correctAnswer) {
            //Insert into answers array
            answers.push(wrongAnswer);
        }
        
    }

    var i = 0;

    while (randompositions.length < 4) {
        var randpos = Math.floor(Math.random() * 4);  //0-3
        if (randompositions.includes(randpos) == false){ //it does not exist
            randompositions[i] = randpos;
            i++;
        }
        
    }
    //
    console.log(answers);
    console.log(randompositions);

    //display them on the divs
    for (i = 1; i <= 4; i++) {
        document.getElementById("box" + i).innerText = answers[randompositions[i-1]]; //1
    }
   /*  for (i = 0; i < 4; i++) {
        document.getElementById("box" + (i+1)).innerText = answers[i]; //1
    } */
}

//start playing Game
document.getElementById("startreset0").onclick = function(){

    //check if we are playing
    if(playing == false){
        //start playing
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerText = score;

        startTimer();
        this.innerText = "Reset";

        generateQandA();

    }else{
        //stop playing by reloading this page

        location.reload();
    }

}

for (let j = 1; j <= 4; j++) {
    document.getElementById("box" + j).onclick = function(){
        if(playing == true){
            if (this.innerText == correctAnswer) {
                show("correct");
                hide("wrong");
                ++score;
                document.getElementById("scorevalue").innerText = score;
                generateQandA();
                setTimeout(function(){
                    hide("correct");
                }, 500);
            }else{
                show("wrong");
                hide("correct");
                setTimeout(function(){
                    hide("wrong");
                }, 500);
                
                /* --score;
                document.getElementById("scorevalue").innerText = score;
                generateQandA(); */
            }
        }
    }
}

function clearText (){
    for (x = 1; x <= 4; x++) {
        document.getElementById("box1").innerText = "";
        document.getElementById("box2").innerText = "";
        document.getElementById("box3").innerText = "";
        document.getElementById("box4").innerText = "";
        document.getElementById("question").innerText = "";
        
        
    }

}








