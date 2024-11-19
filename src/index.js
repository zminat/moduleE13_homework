import './style.css';
import * as math from "./math";

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const  multiply = (a) => a*8;

console.log('ES6 modules!');
console.log('sum = ' + math.sum(2,3));
console.log('multiply from index.js = ' + multiply(5));
console.log('myFn = ' + math.multiply(5));