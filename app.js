"use strict";

let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let allImages = [
  "assets/dice1.png",
  "assets/dice2.png",
  "assets/dice3.png",
  "assets/dice4.png",
  "assets/dice5.png",
  "assets/dice6.png",
];

let random1 = Math.floor(Math.random() * allImages.length);
image1.setAttribute("src", allImages[random1]);

let random2 = Math.floor(Math.random() * allImages.length);
image2.setAttribute("src", allImages[random2]);

// Player 1
// let randomNumber = Math.ceil(Math.random() * 6);
// let randomDiceImage = "dice" + randomNumber + ".png";
// let randomImageSrc = "assets/" + randomDiceImage;

// let image = document.querySelectorAll("img")[0];
// image.setAttribute("src", randomImageSrc);

// Player 2
// let randomNumber2 = Math.ceil(Math.random() * 6);
// let randomDiceImage2 = "dice" + randomNumber2 + ".png";
// let randomImageSrc2 = "assets/" + randomDiceImage2;

// let image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSrc2);

let button = document.querySelector(".reset");
let result = document.querySelector(".result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});

if (random1 > random2) {
  result.innerText = "Player 1 wins!";
} else if (random2 > random1) {
  result.innerText = "Player 2 wins!";
} else {
  result.innerText = "It's a tie!";
}
