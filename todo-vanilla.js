let todo = ['Buy a turtle'];

function start() {
    let input = prompt(("What would you like to do? 'new' - 'list' - 'quit' - 'delete'").toUpperCase());

    while (input !== 'quit' || null) {
        if (input === 'list') {
            list();
        } else if (input === 'new') {
            add();
        } else if (input === 'delete') {
            deleteItem();
        } else {
            console.log("something went wrong!!!!")
           break;
        }

        // ask again for new input
        input = prompt(("What would you like to do? 'new' - 'list' - 'quit' - 'delete'").toUpperCase());
    }
    console.log(todo);
    buildHtmlString();
}
function list(){
    console.log(todo);
}
function add(){
    let input = prompt("Enter new todo");
    todo.push(input);
    console.log('Adding....added ' + input)
}
function deleteItem(){
    let index = prompt("Enter index of todo to be delete: ");
    todo.splice(index, 1);
    console.log("deleting todo at index: " + index);
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