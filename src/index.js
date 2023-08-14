document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputElement = e.target.querySelector('#new-task-description');
    const inputValue = inputElement.value;
    todo(inputValue);
    form.reset();

  })
});

function todo(todoInput) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  let select = document.createElement('select');
  select.id = 'color-selector';
  addOption(select, li);
  btn.textContent = 'X';
  btn.addEventListener('click', deleteTodo);
  li.textContent = todoInput + '  ';
  li.setAttribute('data-priority', '4');
  li.appendChild(btn); li.appendChild(select);
  const ul = document.querySelector('#tasks');
  ul.appendChild(li);
  optionEvent(select, li, ul);
}
function deleteTodo(e) {
  e.target.parentNode.remove();
}
function addOption(select) {
  let option0 = document.createElement('option');
  let option1 = document.createElement('option');
  let option2 = document.createElement('option');
  let option3 = document.createElement('option');
  option0.textContent = "prio"; option0.value = '';
  option1.textContent = "high"; option1.value = 'high';
  option2.textContent = "mid"; option2.value = 'medium';
  option3.textContent = "low"; option3.value = 'low';
  select.appendChild(option0); select.appendChild(option1);
  select.appendChild(option2); select.appendChild(option3);
}
function optionEvent(select, li, ul) {
  select.addEventListener('click', (e) => {
    if (e.target.value === 'high') {
      li.style.color = 'red';
      li.setAttribute('data-priority', '1');
      sortListByPriority(ul);
    } else if (e.target.value === 'medium') {
      li.style.color = 'yellow';
      li.setAttribute('data-priority', '2');
      sortListByPriority(ul);
    } else if (e.target.value === 'low') {
      li.style.color = 'green';
      li.setAttribute('data-priority', '3');
      sortListByPriority(ul);
    }

  })
}
function sortListByPriority(ul) {
  const listItems = Array.from(ul.getElementsByTagName('li'));

  listItems.sort((a, b) => {
    const priorityA = parseInt(a.getAttribute('data-priority'));
    const priorityB = parseInt(b.getAttribute('data-priority'));
    return priorityA - priorityB;
  });

  for (const li of listItems) {
    ul.appendChild(li);
  }
}

