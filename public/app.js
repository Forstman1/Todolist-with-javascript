


let i = 0;

let list = []

let object = []


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

// signin.addEventListener('click', async function()
// {
// 	event.preventDefault()
// 	if (checkvalid())
// 		return 
// 	const api = await fetch('http://localhost:3000/api/' + username.value + '/' + password.value)
// 	const respond = await api.json()
// 	console.log(respond)
// 	object = respond
// 	if (respond.status == "false")
// 	{
// 		alert("The login or password you entered is wrong")
// 		return 
// 	}
// 	big_container.style.display = "grid"
// 	login.style.display = "none"
// 	const annoncementElement = document.createElement('div')
// 	annoncementElement.textContent = "Welcome back " + respond.name
// 	annoncementElement.className = "text-header"
// 	annoncement.appendChild(annoncementElement)
// 	const test = respond.notes
// 	for (let i = 0; i < test.length; i++)
// 		list.push(test[i])
// 	for (let j = 0; j < list.length; j++)
// 	{
// 		const newElement = document.createElement('li')
// 		const deleteNode = document.createElement('div')
// 		newElement.textContent = list[j]
// 		deleteNode.append("x")
// 		deleteNode.className = 'todosclose'
// 		newElement.className = 'todos'
// 		todos.appendChild(newElement);
// 		todos.appendChild(deleteNode)
// 		deleteNode.addEventListener('click', ()=>
// 		{
// 			DeleteNoteFromDatabase(newElement.textContent, object.id)
// 			todos.removeChild(newElement)
// 			todos.removeChild(deleteNode)
// 			for (let t = 0; t < list.length; t++)
// 				if (list[t] == newElement.textContent)
// 					list.splice(t, 1)
// 			i--;
// 		})
// 		i++
// 	}
// });


let addNoteToDataBase = async () => {
	const api = await fetch('http://localhost:3000/api/' + inputs.value + '/' + object.id , {
		method: 'POST'
	})
}

let DeleteNoteFromDatabase = async (note, id) => {
	const api = await fetch('http://localhost:3000/api/delete/' + note + '/' + id , {
		method: 'DELETE',
	})
}


button.addEventListener('click', function()
{
	event.preventDefault()
	if (!inputs.value)
	{
		alert("enter valid input")
		return ;
	}
	else if (i > 6)
	{
		alert("no more space delete some of todos")
		return ;
	}
	// addNoteToDataBase()
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
		DeleteNoteFromDatabase(newElement.textContent, object.id)
		todos.removeChild(newElement)
		todos.removeChild(deleteNode)
		for (let i = 0; i < list.length; i++)
			if (list[i] == newElement.textContent)
				list.splice(i, 1)
		i--;
	})
	i++
});


const signupstuff = document.querySelector('.register')
const emailstuff = document.querySelector('.signupstuff') 
const email = document.querySelector('.email') 
const title = document.querySelector('.title')


// signupstuff.addEventListener('click', function() {
// 	emailstuff.style.display = "inline"
// 	signin.style.display = "none"
// 	signup.style.display = "inline"
// 	title.textContent = "register"
// })

// signup.addEventListener('click', async function() {
// 	event.preventDefault()
// 	if (checkvalid())
// 		return ;
// 	const api = await fetch('http://localhost:3000/api/' + email.value + '/' + username.value + '/' + password.value, {
// 		method: 'POST'
// 	})
// 	const respond = await api.json()
// 	if (!respond.status)
// 	{
// 		alert("The login or password you entered is invalid")
// 		return 
// 	}
// 	big_container.style.display = "grid"
// 	login.style.display = "none"
// 	const annoncementElement = document.createElement('div')
// 	annoncementElement.textContent = "Welcome " + username.value
// 	annoncementElement.className = "text-header"
// 	annoncement.appendChild(annoncementElement)
// })
