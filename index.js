var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randamdice = "dice" + randomNumber1 + ".png";
var randamimage = "images/" + randamdice;
document.querySelector(".dice_one").setAttribute("src",randamimage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randamdice = "dice" + randomNumber2 + ".png";
var randamimage = "images/" + randamdice;
document.querySelector(".dice_two").setAttribute("src",randamimage);

if(randomNumber1 > randomNumber2 )
{
    document.querySelector("h1").textContent="Player 1 is the winner";
}
else
{
    document.querySelector("h1").textContent="Player 2 is the winner";
}

if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="refresh me";
}