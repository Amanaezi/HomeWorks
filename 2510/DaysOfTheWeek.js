"use strict";

let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let n = +prompt("Введите число от 1 до 7:");
let lang = prompt("Введите язык (ru, ua, en):");

if (!isNaN(n) && n >= 1 && n <= 7) 
{
    let dayOfWeek;
    
    switch (lang) 
    {
        case "en":
            dayOfWeek = en[n - 1];
            break;

        case "ru":
            dayOfWeek = ru[n - 1];
            break;
            
        case "ua":
            dayOfWeek = ua[n - 1];
            break;
            
        default:
            alert("Введите язык правильно!");
            break;
    }

        alert(`День недели на ${lang} для числа ${n} - ${dayOfWeek}`);
} 
else 
{
    alert("Введите корректное число от 1 до 7.");
}