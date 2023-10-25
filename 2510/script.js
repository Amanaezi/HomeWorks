"use strict";

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let shuffledCards = shuffle(cards.slice());

function shuffle(arr) 
{
    let rand, temp;

    for (let i = 0; i < arr.length; i++) 
    {
      rand = Math.floor(Math.random() * (i + 1));
      temp = arr[rand];
      arr[rand] = arr[i];
      arr[i] = temp;
    }

    return arr;
}

function play(cards) 
{
    let playerStack = [];
    let computerStack = [];

    while (cards.length > 0) 
    {
        alert("Ваш ход!");
        let playerCard = cards.pop();
        alert(`Вы взяли карту: ${playerCard}`);
        playerStack.push(playerCard);

        if (playerCard === "Q") {
            alert("Вы победили!");
            break; 
        }

        if (cards.length === 0) {
            alert("Карты закончились. Ничья!");
            break;
        }

        alert("Ход компьютера!");
        let computerCard = cards.pop();
        alert(`Компьютер взял карту: ${computerCard}`);
        computerStack.push(computerCard);

        if (computerCard === "Q") {
            alert("Компьютер победил!");
            break;
        }
    }

    alert("Ваши карты: " + playerStack.join(", "));
    alert("Карты компьютера: " + computerStack.join(", "));
}

play(shuffledCards);