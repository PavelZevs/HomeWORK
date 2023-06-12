//------- Переадресация ссылки
// window.addEventListener('load', function () {
//     let articleA =this.document.querySelector('.post a');
//     articleA.addEventListener('click', function (event) {
//         event.preventDefault();
//         console.log(event.target);
//         console.log(event);
//         event.target.setAttribute('href', 'https://symbl.cc/ru/1F50D/');
//         window.location.href = event.target.href;
//     })
// })










// -------------------------------HW_JS#9-------------TODo-list

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle('checked');
  } else if (ev.target.tagName === "SPAN") {
    let div = ev.target.parentNode;
    div.remove();
  }
}, false);

function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('toDoEl').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("Введите задачу");
  } else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('toDoEl').value = "";
  let span = document.createElement('SPAN');
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}



