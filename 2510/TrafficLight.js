"use strict"

function trafficLight(name) {
    let colors = ["green", "yellow", "red"];
    let i = 0;
    let color;
    let light = function () {
        color = (i !== colors.length) ? color = colors[i++] : color = colors[i = 0];
        let arr = {};
        arr.name = name;
        arr.color = color;
        return arr;
    };
    return light;
} 

let trafficLight1 = trafficLight("First");
let state = trafficLight1();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight1();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight1();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight1();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);

console.log("");

let trafficLight2 = trafficLight("Second");
state = trafficLight2();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight2();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight2();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);
state = trafficLight2();
console.log(`%c ${state.color}`, `background: ${state.color}; color: #bada55`);