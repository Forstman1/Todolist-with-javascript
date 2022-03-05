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
		list1.innerHTML = "1." + inputs.value;
		list1_x.style.display = "inline"
		i++;
	}
	else if (i == 1)
	{
		list2.innerHTML = "2." + inputs.value;
		list2_x.style.display = "inline"
		i++;
	}
	else if (i == 2)
	{
		list3.innerHTML = "3." + inputs.value;
		list3_x.style.display = "inline"
		i++;
	}
	else if (i == 3)
	{
		list4.innerHTML = "4." + inputs.value;
		list4_x.style.display = "inline"
		
		i++;
	}
	else if (i == 4)
	{
		list5.innerHTML = "5." + inputs.value;
		list5_x.style.display = "inline"
		i++;
	}
	else if (i == 5)
	{
		list6.innerHTML = "6." + inputs.value;
		list6_x.style.display = "inline"
		i++;
	}
	else if (i > 5)
	{
		i = 6;
		alert("no more space you need to delete some to-do's");
	}
});

function deleteTodos() {
	if (i == 1)
	{
		list1_x.style.display = "none";
		list1.innerHTML = "";
		i--;
	}
	else if (i == 2)
	{
		list2_x.style.display = "none";
		list2.innerHTML = "";
		i--;
	}
	else if (i == 3)
	{
		list3_x.style.display = "none";
		list3.innerHTML = "";
		i--;
	}
	else if (i == 4)
	{
		list4_x.style.display = "none";
		list4.innerHTML = "";
		i--;
	}
	else if (i == 5)
	{
		list5_x.style.display = "none";
		list5.innerHTML = "";
		i--;
	}
	if (i == 6)
	{
		list6_x.style.display = "none";
		list6.innerHTML = "";
		i--;
	}
}

list1_x.addEventListener('click', deleteTodos);

list2_x.addEventListener('click', deleteTodos);

list3_x.addEventListener('click', deleteTodos);

list4_x.addEventListener('click', deleteTodos);

list5_x.addEventListener('click', deleteTodos);

list6_x.addEventListener('click', deleteTodos);