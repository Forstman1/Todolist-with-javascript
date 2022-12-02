


let i = 0;

let list = []


const button = document.querySelector('.button');
const inputs = document.querySelector('.inputs');
const todos = document.querySelector('.list');
const login = document.querySelector('.login')
const big_container = document.querySelector('.big-container')
const signin = document.querySelector('.signin')
const signup = document.querySelector('.signup')

const annoncement = document.querySelector('.annoncement')

const username = document.querySelector('.username')
const password = document.querySelector('.password')



let checkvalid = () => {
	if (!username.value || !password.value || password.value.length < 8 || username.value.length < 4)
	{
		alert("not valid login or password")
		return true;
	}
	const format = /\^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]\*\$/;
	if (username.value.match(format) || password.value.match(format))
	  return true;
	return false;
}

signin.addEventListener('click', async function()
{
	event.preventDefault()
	if (checkvalid())
		return 
	const api = await fetch('http://localhost:3000/api/' + username.value + '/' + password.value)
	const respond = await api.json()
	console.log(respond.status)
	if (!respond.status)
	{
		alert("The login or password you entered is invalid")
		return 
	}
	big_container.style.display = "grid"
	login.style.display = "none"
	const annoncementElement = document.createElement('div')
	annoncementElement.textContent = "Welcome back " + username.value
	annoncementElement.className = "text-header"
	annoncement.appendChild(annoncementElement)
	const test = respond.notes
	for (let i = 0; i < test.length; i++)
		list.push(test[i])
	for (let j = 0; j < list.length; j++)
	{
		const newElement = document.createElement('li')
		const deleteNode = document.createElement('div')
		newElement.append(list[j])
		deleteNode.append("x")
		deleteNode.className = 'todosclose'
		newElement.className = 'todos'
		todos.appendChild(newElement);
		todos.appendChild(deleteNode)
		deleteNode.addEventListener('click', ()=>
		{
			todos.removeChild(newElement)
			todos.removeChild(deleteNode)
			for (let t = 0; t < list.length; t++)
				if (list[t] == newElement.value)
					list.splice(t, 1)
			console.log(list[j])
			i--;
		})
	i++
	}
});


button.addEventListener('click', function()
{
	if (!inputs.value)
	{
		alert("enter valid input")
		return ;
	}
	if (i > 10)
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
			if (list[i] == newElement.value)
				list.splice(i, 1)
		console.log(list)
		i--;
	})
	i++
});


const signupstuff = document.querySelector('.register')
const emailstuff = document.querySelector('.signupstuff') 
const email = document.querySelector('.email') 
const title = document.querySelector('.title')


signupstuff.addEventListener('click', function() {
	emailstuff.style.display = "inline"
	signin.style.display = "none"
	signup.style.display = "inline"
	title.textContent = "register"

})

signup.addEventListener('click', async function() {
	event.preventDefault()
	if (checkvalid())
		return 
	const api = await fetch('http://localhost:3000/api/' + email.value + '/' + username.value + '/' + password.value, {
		method: 'POST'
	})
	const respond = await api.json()
	console.log(respond.status)
	if (!respond.status)
	{
		alert("The login or password you entered is invalid")
		return 
	}
	big_container.style.display = "grid"
	login.style.display = "none"
	const annoncementElement = document.createElement('div')
	annoncementElement.textContent = "Welcome " + username.value
	annoncementElement.className = "text-header"
	annoncement.appendChild(annoncementElement)
})
