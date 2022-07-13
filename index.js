let leftRandomNumber = Math.floor(Math.random() * 6) + 1;
let rightRandomNumber = Math.floor(Math.random() * 6) + 1;

let leftImageGrab = `images/dice${leftRandomNumber}.png`;
let rightImageGrab = `images/dice${rightRandomNumber}.png`;

document.querySelector(".dice .img1").setAttribute("src", leftImageGrab);
document.querySelector(".dice .img2").setAttribute("src", rightImageGrab);

let message;

if(leftRandomNumber == rightRandomNumber){
    message = "It's a tie!";
}
else if(leftRandomNumber > rightRandomNumber){
    message = "Player 1 Wins.";
}
else{
    message = "Player 2 Wins.";
}
    document.querySelector("h1").innerText = message;

