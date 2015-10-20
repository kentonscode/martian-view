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
   showImages();
  });

//creating img div

function showImages() {
 var roverImages = requestDateSearch.responseText;
 console.log(roverImages);
  for (var images = 0; images < roverImages.length; images++) {
    var separate = roverImages[images].split('/');
    console.log(separate);
    var imgTag = document.createElement('img');
    imgTag.src = roverImages;
    imgTag.setAttribute('width', '300px');
    imgTag.setAttribute('height', '300px');
    imgTag.alt = 'curiosity rover image';
    document.getElementById('images').appendChild(imgTag);
    }
  }
}

searchDate.addEventListener('click', submitDate, false);