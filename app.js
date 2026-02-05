//MODULES ES6 - Simply put, Module is a one statement placed in different files
import { random } from './utils/data.js';

const people = [
  { name: 'john', job: 'developer' },
  { name: 'susan', job: 'designer' },
  { name: 'anna', job: 'the boss' },
];

// console.log(people);
// console.log(random);

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  container.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
  showPeople();
});
