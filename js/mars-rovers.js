var searchDate = document.getElementById('curiosity-search');

function dateSelection() {
  var datePicked = new Object();
  datePicked.curiosityDate = document.forms[0].elements.date.value;
  return JSON.stringify(datePicked);
}

function submitDate(event) {
  event.preventDefault();
  var requestDateSearch = new XMLHttpRequest();
  requestDateSearch.open('GET', '/curiosity-rover/' + document.forms[0].elements.date.value, true);
  requestDateSearch.setRequestHeader('Content-type', 'application/json');
  requestDateSearch.send(dateSelection());
  requestDateSearch.addEventListener('load', function(){
  });
}

searchDate.addEventListener('click', submitDate, false);