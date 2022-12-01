function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  boxMein: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy:document.querySelector('[data-destroy]'),
}
// console.log(ref.btnDestroy);

ref.btnCreate.addEventListener('click',createBoxes);
ref.btnDestroy.addEventListener('click',destroyBoxes);

function createBoxes() {
  const n = ref.input.value;
  const items = [];

  for (let i = 1; i <= n; i += 1) {
  const createDiv = document.createElement("div");

    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = i + 10+ "px";
    createDiv.style.height = i + 10 + "px";

    items.push(createDiv);
}
ref.boxMein.append(...items);
}

function destroyBoxes () {
ref.boxMein.innerHTML = "";
};
