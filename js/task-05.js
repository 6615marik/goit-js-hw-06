 const ref = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
    
}
// console.log(ref.input);
ref.input.addEventListener('input',onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value === '') {
     ref.span.textContent = 'Anonymous';
}
    else { ref.span.textContent = event.currentTarget.value }   
}