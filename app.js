var i = 0;

var list1 = document.querySelector('.todos1');
var list2 = document.querySelector('.todos2');
var list3 = document.querySelector('.todos3');
var list4 = document.querySelector('.todos4');
var list5 = document.querySelector('.todos5');
var list6 = document.querySelector('.todos6');
var button = document.querySelector('.button');
var inputs = document.querySelector('.inputs');

var list1_x = document.querySelector('.todos1close');
var list2_x = document.querySelector('.todos2close');
var list3_x = document.querySelector('.todos3close');
var list4_x = document.querySelector('.todos4close');
var list5_x = document.querySelector('.todos5close');
var list6_x = document.querySelector('.todos6close');

button.addEventListener('click', function()
{
	if (!inputs.value)
		return ;
	if (i == 0)
	{
		list1.innerHTML = inputs.value;
		list1_x.style.display = "inline"
		i++;
	}
	else if (i == 1)
	{
		list2.innerHTML = inputs.value;
		list2_x.style.display = "inline"
		i++;
	}
	else if (i == 2)
	{
		list3.innerHTML = inputs.value;
		list3_x.style.display = "inline"
		i++;
	}
	else if (i == 3)
	{
		list4.innerHTML = inputs.value;
		list4_x.style.display = "inline"
		i++;
	}
	else if (i == 4)
	{
		list5.innerHTML = inputs.value;
		list5_x.style.display = "inline"
		i++;
	}
	else if (i == 5)
	{
		list6.innerHTML = inputs.value;
		list6_x.style.display = "inline"
		i++;
	}
	else if (i > 5)
	{
		i = 6;
		alert("no more space you need to delete of to-do's");
	}
});

function deleteTodos(j) {
	// if (i == 1)
	// {

	// }
	// else if (i == 2)
	// {

	// }
	// else if (i == 3)
	// {

	// }
	// else if (i == 4)
	// {

	// }
	// else if (i == 5)
	// {

	// }
	if (j == 6)
	{
		console.log("ana hna");
		list6_x.style.display = "none";
		list6.innerHTML = "0";
	}
}

list1_x.addEventListener('click', deleteTodos(i));

list2_x.addEventListener('click', deleteTodos(i));

list3_x.addEventListener('click', deleteTodos(i));

list4_x.addEventListener('click', deleteTodos(i));

list5_x.addEventListener('click', deleteTodos(i));

list6_x.addEventListener('click', deleteTodos(i));