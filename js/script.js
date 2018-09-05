const start = () => { 
	const element = number => {
		const container = document.body.children[0];	
		const block = container.children[1];
		const ul = block.children[0];
		const li = document.createElement('li');
		const size = (number * 5) + 15 + 'px';
		li.style.fontSize = size;
		ul.appendChild(li);
		li.insertAdjacentHTML("afterBegin", number);
	}

	const recursion = number => {
    	if (number > -1) {
    	console.log(number);
		element(number);
        return recursion(number - 1);
    	} else {
        return number;
	    }
	}
	recursion(10);
	
}



const button = document.querySelector('.button');
button.addEventListener('click', start); 