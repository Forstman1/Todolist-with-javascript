
let i = 0;

let list = []

const button = document.querySelector('.button');
const inputs = document.querySelector('.inputs');
const todos = document.querySelector('.list');


button.addEventListener('click', function()
{
	if (!inputs.value)
	{
		alert("enter valid input")
		return ;
	}
	if (i > 6)
	{
		alert("no more space delete some of todos")
		return ;
	}
	list.push(inputs.value)
	let newElement = document.createElement('li')
	let deleteNode = document.createElement('div')
	newElement.append(list[i])
	deleteNode.append("x")
	deleteNode.className = 'todosclose'
	newElement.className = 'todos'
	todos.appendChild(newElement);
	todos.appendChild(deleteNode)
	deleteNode.addEventListener('click', ()=>{
		todos.removeChild(newElement)
		todos.removeChild(deleteNode)
	})
	i++
});

