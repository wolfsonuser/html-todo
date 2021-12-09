## TODO HTML

### link: https://www.w3schools.com/howto/howto_js_todolist.asp

### Three files: todo.html, todo.css, and README.md

### Original files from W3S website modified: 

1. added flex instead of box-sizing
1. delete icon X instead of multiplication char
1. ::before changed to char '<' instead of lines
1. color of header changed to green
1. Added todo-jquery dot js, based on example by Colt Steele
1. Added todo-vanilla dot js, based also on example by Colt Steele
1. Refactored todo-vanilla into separated functions including "delete"
   1. when quiting, it list todos in the html page
   1. when list : it works only on debugging mode, otherwise it doesn't
   1. pending find the reason or the bug or the fix
1. pending: todo with express (ejm) and todo with react and express
1. Started with react: todo-react.html
  1. tried local file minimized files did not work: CORS policy errors
  1. tried with https : some worked react and react-dom
  1.                   some did not work: bootstrap fontawesome
  1. tried whole app.js inside script tag in todo-react.html: did not work because of babel
  1. tried conversion jsx into vanilla and run without text/babel : did not work
  1. tried in html inside script tag function app then function TodoListCard with just hello world it did work!!!
  1. start from there
  1. I had created a folder "react-example", renamed it IGNORE because after copying todo-react.html inside it to todo-react-one-file.html outside it, it gave error not finding css and/or js files. 
  1. edited dot gitignore to add IGNORE
  1. 

