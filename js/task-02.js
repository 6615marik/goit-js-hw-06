const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

const foodIngredients = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.classList.add("item")
  items.textContent = ingredient;
 return items
});
console.log(foodIngredients);

ulList.append(...foodIngredients);


// const list = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i++) {
//   let listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = ingredients[i];
//   list.appendChild(listItem);
// };