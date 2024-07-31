const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para1 = document.createElement('p');
para1.textContent = `Hey I'm red!`;
para1.style.color = 'red';
container.appendChild(para1);

const header3 = document.createElement('h3');
header3.textContent = `I'm a blue h3!`;
header3.style.color = 'blue';
container.appendChild(header3);

const borderDiv = document.createElement('div');
borderDiv.style.border = 'black 1px solid';
borderDiv.style.backgroundColor = 'hotpink';

const borderDivh1 = document.createElement('h1');
borderDivh1.textContent = `I'm in a div`;
borderDiv.appendChild(borderDivh1);

const borderDivp = document.createElement('p');
borderDivp.textContent = 'ME TOO!';
borderDiv.appendChild(borderDivp);

container.appendChild(borderDiv);

const btn = document.querySelector('#btn');
btn.onclick = () =>
  alert('Button Two - Better but still not the way to do this');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert('Button Three - And Goldilocks is still sleeping in my bed!');
});

function alertFunction() {
  alert('Yay! You clicked it!');
}

const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', alertFunction);

// btn3.addEventListener('click', function (e) {
//   console.log(e);
// });

// btn3.addEventListener('click', function (e) {
//   console.log(e.target);
// }); //<button id="btn3">Click me n stuff</button>

btn3.addEventListener('click', function (e) {
  (e.target.style.background = 'blue'), (e.target.style.color = 'white');
}); //button background turned blue, text turned white when clicked

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => alert(button.id));
});
