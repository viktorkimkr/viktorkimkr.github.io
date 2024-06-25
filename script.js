
document.querySelector('#box1').onclick = function() {
  // Удаление боксов
  document.querySelector('#box1').remove();
  document.querySelector('#box2').remove();

  // Переход на страницу ToDo List
  window.location.href = 'todo.html';
};

// Обработчик для кнопки "Add" на странице ToDo List
document.querySelector('.addBtn').onclick = function() {
  addTask();
};

function addTask() {
  const taskText = document.getElementById('myinput').value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);

    document.getElementById('myinput').value = ''; // Очистка поля ввода после добавления задачи
  }
}
