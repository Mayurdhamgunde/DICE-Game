// ******** For 1st Dice *********

let randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "dice"+randomNumber1+".png";
var randomImageSource = "/images/"+randomDiceImages;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// ********** For 2nd Dice**********
let randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "dice"+randomNumber2+".png";
var randomImageSource = "/images/"+randomDiceImages;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

// ********* condition ********* 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "☹️Draw";
}