// gather form elements

function tellstory() {
	var txtFn = document.getElementById('txtFn');
	var txtLn = document.getElementById('txtLn');
	var txtAge = document.getElementById('txtAge');
	var txtGoal = document.getElementById('txtGoal');

	// create variables for input
	var firstName = txtFn.value;
	var lastName = txtLn.value;
	var age = txtAge.value;
	var goal = txtGoal.value;

	// write story
	var quote = firstName + ' ' + lastName + ' at ' + age + ' years old your goal of ' + " ' ";
	quote += goal + " ' " + ' is within your grasp. ';
	quote +=
		'  <br />  <br/>' +
		' You are Special, Unique, and Wonderful beyond measure  ' +
		' you owe it to your self to see your goals through. ';
	quote +=
		'  <br />  <br/>' +
		' If you dont hear it from anyone else just know I appreciate you ' +
		firstName +
		',' +
		' and always remember the future belongs to those that believe in the beauty of there dreams.';

	// copy story to output
	output.innerHTML = quote;
}

// end story
