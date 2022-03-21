let cardsList = [];
const cardsElem = document.querySelector('#cards');
const ascSortElem = document.querySelector('.sort .asc');
const descSortElem = document.querySelector('.sort .desc');

function render(list) {
	cardsElem.innerText = '';
	for(let elem of list){
		const divElem = document.createElement('div');
		divElem.innerText = elem;
		cardsElem.appendChild(divElem);
	}
}



document.forms[0].addEventListener('submit', event=>{
	event.preventDefault();
	const value = event.target.title.value;
	if (value !== ''){
		cardsList.push(value);	
	}else{
		alert('Значение пустое!');
	}
	event.target.title.value = '';
	render(cardsList);
})

document.forms[1].addEventListener('submit', event=>{
	event.preventDefault();
	const value = event.target.title.value;
	const lst = cardsList.filter(elem => elem === value);
	render(lst);
})

ascSortElem.addEventListener('click', event=>{
	cardsList.sort();
	render(cardsList);
});

descSortElem.addEventListener('click', event=>{
	cardsList.sort();
	cardsList.reverse();  
	render(cardsList);
});

render(cardsList);