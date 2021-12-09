let todo = ['Buy a turtle'];
let result = "";

function start() {
    let input = prompt(("What would you like to do? 'new' - 'list' - 'quit' - 'delete'").toUpperCase());

    while (input !== 'quit' ) {
        if (input === 'list') {
            list(todo);
           
        } else if (input === 'new') {
            add();
        } else if (input === 'delete') {
            deleteItem();
        } else {
            console.log("something went wrong!!!!")
            // input = 'quit'; these two lines equivalent to break;
            // continue;
            break; // NO NO NO NO NO NO continue;
        }

        // ask again for new input
        input = prompt(("What would you like to do? 'new' - 'list' - 'quit' - 'delete'").toUpperCase());
    }
    console.log(todo);
    buildHtmlString();
}
function list(todo){
   buildHtmlString(todo);
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
    result = "";
    result += "<ul>"
    todo.forEach(function (item, i) {
        result += `<li>${i} - ${item}</li>`
    })
    result += '</ul>'
    resultHtml = document.querySelector('#resultHtml');
    resultHtml.innerHTML = result;
}