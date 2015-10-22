var submit = document.getElementById('userSubmit');

function submitForm(event) {
  event.preventDefault();
  console.log(formData()); //shows form inputs on client console for testing
  var buttonClick = new XMLHttpRequest();
  buttonClick.open("POST", "/sign-up", true);
  buttonClick.setRequestHeader("Content-type", "application/json");
  buttonClick.send(formData());
  buttonClick.addEventListener('load', function(){
    console.log(buttonClick.responseText); //shows what server responds with on client console
  });
} 

function formData() {
  var theData = new Object();
  theData.firstname = document.forms[0].elements.firstName.value;
  theData.lastname = document.forms[0].elements.lastName.value;
  theData.password = document.forms[0].elements.password.value;
  return JSON.stringify(theData);
}

submit.addEventListener('click', submitForm, false);