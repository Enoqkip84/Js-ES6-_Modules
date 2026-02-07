//MODULES ES6 - Simply put, Module is a one statement placed in different files
import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
// console.log(people);
// console.log(random);

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// container.innerHTML = newPeople;

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
