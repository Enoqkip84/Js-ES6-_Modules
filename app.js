//MODULES ES6 - Simply put, Module is a one statement placed in different files
import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';
// console.log(people);
// console.log(random);

const container = get('.container');
const btn = get('.btn');
const container1 = get('.container1');
console.log(container1);

// container.innerHTML = newPeople;

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
