const todo = ['Buy a turtle'];

function start() {
    let input = prompt(("What would you like to do? 'new' - 'list' - 'quit'").toUpperCase());

    while (input !== 'quit') {
        if (input === 'list') {
            console.log(todo);
        } else if (input === 'new') {
            let newTodo = prompt('Enter new TODO');
            // add to todo array
            todo.push(newTodo);
        }
        // ask again for new input
        input = prompt(("What would you like to do?").toUpperCase());
    }
    console.log(todo);
    //buildHtmlString();
}
function buildHtmlString() {
    let result = "";
    result += "<ul>"
    todo.forEach(function (item, i) {
        result += `<li>${i} - ${item}</li>`
    })
    result += '</ul>'
    resultHtml = document.querySelector('#resultHtml');
    resultHtml.innerHTML = result;
}