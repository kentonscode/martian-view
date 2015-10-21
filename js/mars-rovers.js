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
   if (requestDateSearch.responseText == 'No Photos Found For This Day') {
    noImages();
   } else {
   showImages();
 }
  });

//creating images div

function showImages() {
 var images = JSON.parse(requestDateSearch.responseText);
 for (image in images) {
  var imgTag = document.createElement('img');
    imgTag.src = images[image];
    imgTag.setAttribute('width', '300px');
    imgTag.setAttribute('height', '300px');
    imgTag.alt = 'curiosity rover image';
    imgTag.className = 'img-thumbnail'
    document.getElementById('images').appendChild(imgTag);
    }
  }
}

//show error message

function noImages() {
  var noPhotos = images.textContent
  images.textContent = 'Sorry, No Photos Found For This Day. Please search again'
  document.getElementById('images').appendChild(noPhotos);
}

searchDate.addEventListener('click', submitDate, false);