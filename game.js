//Remember these? We get references to the elements.
let game = document.querySelector("#game");
let chicken = document.querySelector("#chicken");

//This function returns a random integer [0...max)
function random(max){
    return Math.floor(Math.random() * max);
}

//This function sets the position of the chicken to a random
//place inside the game div
function setRandomPosition(){
    chicken.style.top = random(game.offsetHeight - chicken.offsetHeight) + "px";
    chicken.style.left = random(game.offsetWidth - chicken.offsetWidth) + "px";
}

//Call this function when the player clicks the chicken
function youWin(){
    alert("Winner!");
}

//We've seen this before. Call the "youWin" function
//whenever the user clicks the chicken
chicken.addEventListener('click', youWin);

//A new event lisener! "mouseover" happens when the MOUSE goes
//OVER the element.
//
//Also: Peep the anonymous function we are passing in.
chicken.addEventListener('mouseover', function(){
    //When you get the mouse over the chicken there
    //is an 80% chance the chicken moves before you
    //can click it
    if ( Math.random() < .8 ){
        setRandomPosition();
    }
});

//Another function the browser gives us!
//Every 1000 miliseconds (1 second) move that bird
window.setInterval(setRandomPosition, 1000);