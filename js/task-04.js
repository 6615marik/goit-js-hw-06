const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

const { sub, add, span } = button;

let counterValue = 0;

const increment = () => {
counterValue += 1;
span.textContent = counterValue;
};

const decrement = () => {
counterValue -= 1;
span.textContent = counterValue;
};

sub.addEventListener("click", increment);
add.addEventListener("click", decrement);