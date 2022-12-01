const ref = {
    input: document.getElementById('font-size-control'),
    span: document.querySelector('#text')
};
// console.log(ref.input.value) ;

ref.input.addEventListener('input',changeStyle)

function changeStyle() {
   ref.span.style.fontSize = ref.input.value + "px"
}

// changeStyle.oninput = function() {
//  ref.span.style.fontSize = ref.input.value + "px";
// };