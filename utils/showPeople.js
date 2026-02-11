/*
==================================================
export default - first way
- There is should only be one export default per file, unlike named export.
- When importing, you can named it whatever you like, the name must not match unlike named export. 
- There is an aspoect of parameter usage unlike the named export. 
==================================================
*/

// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join('');
//   return newPeople;
// };

// export default showPeople;

/*
==================================================
export default - second way
==================================================
- Here, you can only export the value, wheather it is a string, object or array
-not very helpful especially when checking errors
*/

export default (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  return newPeople;
};
