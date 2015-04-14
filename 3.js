var submitButton = document.getElementById('submit');

submitButton.onclick = function(){

	var name = document.getElementById('name').value;

	var colour = document.getElementById('colour').value;

	var animal = "other";

	if(document.getElementById('cats').checked){
		animal = "cat";
	} else if(document.getElementById('dogs').checked) {
		animal = "dog"
	}

	showResults(name, colour, animal);
}

function showResults(name, colour, animal){
	document.getElementById('name-result').innerHTML = name;

	document.getElementById('results').style.display = "block";

	document.getElementById('dog').style.display = "none";
	document.getElementById('cat').style.display = "none";
	document.getElementById('other').style.display = "none";
	
	document.getElementById(animal).style.display = "block";

	document.getElementById('results').style.background = colour;
}