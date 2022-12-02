
let i = 0;

let list = []


let userState = {
	login : "guest",
	connected : "no"
}

const button = document.querySelector('.button');
const inputs = document.querySelector('.inputs');
const todos = document.querySelector('.list');
const login = document.querySelector('.login')
const avatar = document.querySelector('.image')
const big_container = document.querySelector('.big-container')
const sign = document.querySelector('.sign')



const username = document.querySelector('.username')
const password = document.querySelector('.password')


avatar.addEventListener('click', function()
{
	login.style.display = "grid"
	big_container.style.display = "none"
});


sign.addEventListener('click', async function()
{
	const api = await fetch('http://localhost:3000/api/' + username.value + '/' + password.value)
	const respond = await api.json()
	console.log(respond.status)
});


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
	const newElement = document.createElement('li')
	const deleteNode = document.createElement('div')
	newElement.append(inputs.value)
	deleteNode.append("x")
	deleteNode.className = 'todosclose'
	newElement.className = 'todos'
	todos.appendChild(newElement);
	todos.appendChild(deleteNode)
	deleteNode.addEventListener('click', ()=>{
		todos.removeChild(newElement)
		todos.removeChild(deleteNode)
		for (let i = 0; i < list.length; i++)
		{
			if (list[i] == newElement.value)
				list.splice(i, 1)
		}
		console.log(list)
		i--;
	})
	i++
});
