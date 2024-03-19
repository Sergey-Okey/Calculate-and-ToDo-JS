const inputElement = document.getElementById('title')
const creatBtn = document.getElementById('creat')
const listTask = document.getElementById('list-task')

//Создал массив для хранения заметок
const notes = [
    {
        title:'Купить хлеб',
        completed: false,
    },
    {
        title: 'Написать другу',
        completed: false,
    },
]

// Функция для рендера заметок из массива на страницу
function  renderNotes (){
    listTask.innerHTML =''
    if (notes.length === 0){
        listTask.innerHTML = '<h2>Задачи отсувствуют!</h2>'
    }
    for (let i = 0; i < notes.length; i++){
        listTask.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i))
    }
}
renderNotes();

// Функция по клику на кнопку создать заметку
creatBtn.onclick = function (){
    listTask.innerHTML=''
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
        title:inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    renderNotes()
    inputElement.value = ''
}

//Обработчик события клика по кнопкам
listTask.onclick = function (event){
   if(event.target.dataset.index){
       const index = parseInt(event.target.dataset.index)
       const type = event.target.dataset.type

       if(type === 'toggle'){
          notes[index].completed = !notes[index].completed
       }else if (type === 'remove'){
           notes.splice(index, 1)
       }
       renderNotes()
   }
}

// Функция для создание шаблона заметки
function getNotesTemplate (note, index){
  return `
    <li class="item-task">
    <span class="${note.completed ? 'true' : ''}" data-index="${index}">${note.title}</span>
    <button class="remove-task" data-index="${index}" data-type="remove">
    &#10006;
    </button>
    <button class="${note.completed ? 'btn-warning' : 'btn-success'}" data-index="${index}" data-type="toggle">
    &#10004;
    </button>
    </li>
         `
}



