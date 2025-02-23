const refs = {
    form: document.querySelector('#mainForm'),
    container: document.querySelector('.js-container')
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    const form = event.target;
    const amount = Number(form.elements.amount.value);

    if(isNaN(amount) || amount <= 0){
        alert('Enter a positive number!')
        return;
    }
    console.log(amount)
    refs.container.innerHTML = generateCircles(amount);

    refs.container.addEventListener('click', handleCircleDelete)
    form.reset(); 
}

function handleCircleDelete(circle){
    if(circle.target === circle.currentTarget) return;
    circle.target.remove();
}


function generateCircles(amount){
    let html = '';
    for (let index = 1; index < amount; index++) {
        html += `<div class="circle" style="background-color: ${getRandomColor()}"></div>`
    }
    return html;
}