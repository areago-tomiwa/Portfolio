document.getElementById("startreset1").onclick = function(){
    if(this.innerText === "Start"){
       loader();
       this.innerText = "End";
    }else if (this.innerText === "End") {
        location.reload();
    }

} 


//Declaration of variables
let mark = 0;
let timeRemaining = 60;  // timeleft
// var timer; //action
// var WordMatch;//correctAnswer
let gamePlay;//playing





/* 
Function Declaration
1. reveal
2. conceal
3. 
 */

//Writing the function
//reveal
function reveal(id){
    document.getElementById(id).style.display ="block";

}
//conceal
function conceal(id){
    document.getElementById(id).style.display ="none";
}

var words = [
    "Lake", "Talk", "look", 
    "Nail", "Lock", "Edo", 
    "mole", "Boot", "Bee", 
    "Sail", "Resume", "Grace", 
    "Bird", "Swim", "love",
    "Bell","Kogi", "Sole", 
    "Cat", "Shoe", "Sandal", 
    "Crow", "Dove", "Dog", 
    "Fish", "Corn", "Apple", 
    "Pear", "Submit", "Case", 
];

//Initialise Game

function loader(){
    //load word from array
    showWord(words);
    reveal("score1");
    //Start matching on word input
    document.getElementById("wordInput").addEventListener("input", startMatch);
    // Call countdown every second
    setInterval(countDown, 1000);
    //check status of the game
    setInterval(checkStatus, 50)


}

// Pick & show random word 
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    document.getElementById("wordDisplayed").innerHTML = words[randIndex];

}


//Start word Match
function startMatch(){
    if (matchWords()){
        gamePlay = true;
        showWord(words);
        document.getElementById("wordInput").value ='';
        
        mark++;

    }
    document.getElementById("scoreValue").innerHTML = mark;

}

//Match currentWord to word Input
function matchWords(){
        
    var wordInput = document.getElementById("wordInput").value;
    var wordDisplayed = document.getElementById("wordDisplayed").innerHTML;
    if(wordInput.length === wordDisplayed.length){

        if (wordInput === wordDisplayed) {
            conceal("different");
            reveal("match");
            setTimeout(function(){
                conceal("match");
            }, 1000);
            return true;
    
    
        }else {
            reveal("different");
            conceal("match");
            setTimeout(function(){
                conceal("different");
            }, 1000);
            return false;
        }
    }
}

// Countdown Timer
function countDown(){
    //Make sure time is not run out 
    if(timeRemaining > 0 ){
        //Decrement 
        --timeRemaining;
    }else if (timeRemaining === 0){
        //Game is over
        gamePlay = false;
        conceal("different");
        conceal("match");
        conceal("score1");
    }
    // Show time
    document.querySelector("#countDownTime").innerHTML = timeRemaining;   
    
}

//Check game Status
function checkStatus() {
    if (!gamePlay && timeRemaining === 0) {
        reveal("gameOver1");
        document.getElementById("gameOver1").innerHTML = "<p class = 'mt-5' style = 'text-transform: uppercase;'>Game Over!!</p><p style = 'font-family: monospace;'>Your score is " + mark +" </p>";
 
    }
}

