1
const quantityCategories = document.querySelectorAll('.item')
// console.log(quantityCategories);
console.log(`Number of categories: ${quantityCategories.length}`)

// 2
const categoriesArray = [...quantityCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

// 2

// const list = document.querySelector(".item");
// const listTitles = document.querySelectorAll(".item>h2");
// const listsInsideList = document.querySelectorAll(".item>ul");
// for (let i = 0; i < listTitles.length; i++) {
//   let text = listTitles[i].textContent;
//   let listArr = listsInsideList[i].querySelectorAll("li");
//   let listLen = listArr.length;
//   console.log("Category: " + text + "\n" + "Elements: " + listLen);
// };