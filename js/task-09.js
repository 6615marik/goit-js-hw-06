function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body:document.body
}
// console.log(ref.body);
ref.button.addEventListener('click', onChangeColour);

function onChangeColour(event) {
  ref.body.style.backgroundColor = getRandomHexColor();
  ref.span.textContent = getRandomHexColor();
 }