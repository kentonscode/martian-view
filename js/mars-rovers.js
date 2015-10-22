//Curiosity Search

var searchCuriosity = document.getElementById('curiosity-search');

function curiosityDateSelection() {
  var datePicked = new Object();
  datePicked.curiosityDate = document.forms[0].elements.curiosity.value;
  return JSON.stringify(datePicked);
}

function submitCuriosityDate(event) {
  event.preventDefault();
  var requestDateSearch = new XMLHttpRequest();
  requestDateSearch.open('GET', '/curiosity-rover/' + document.forms[0].elements.curiosity.value, true);
  requestDateSearch.setRequestHeader('Content-type', 'application/json');
  requestDateSearch.send(curiosityDateSelection());
  requestDateSearch.addEventListener('load', function(){
   if (requestDateSearch.responseText == 'No Photos Found For This Day') {
    noImages();
  } else {
   showImages();
  }
});

//creates images div

function showImages() {
 var images = JSON.parse(requestDateSearch.responseText);
 var imagesDiv = document.getElementById('curiosity-images');
 while(imagesDiv.firstChild){
   imagesDiv.removeChild(imagesDiv.firstChild);
 }
 for (var image in images) {
  var imgTag = document.createElement('img');
  imgTag.src = images[image];
  imgTag.setAttribute('width', '400px');
  imgTag.setAttribute('height', '400px');
  imgTag.alt = 'curiosity rover image';
  imgTag.className = 'img-thumbnail';
  document.getElementById('curiosity-images').appendChild(imgTag);
  document.getElementById('curiosity-images').style.display = 'block';
  document.getElementById('opportunity-images').style.display = 'none';
  document.getElementById('spirit-images').style.display = 'none';
  document.getElementById('noPhotos').style.display = 'none';
    }
  }
}

//Opportunity Search

var searchOpportunity = document.getElementById('opportunity-search');

function opportunityDateSelection() {
  var datePicked = new Object();
  datePicked.opportunityDate = document.forms[1].elements.opportunity.value;
  return JSON.stringify(datePicked);
}

function submitOpportunityDate(event) {
  event.preventDefault();
  var requestDateSearch = new XMLHttpRequest();
  requestDateSearch.open('GET', '/opportunity-rover/' + document.forms[1].elements.opportunity.value, true);
  requestDateSearch.setRequestHeader('Content-type', 'application/json');
  requestDateSearch.send(opportunityDateSelection());
  requestDateSearch.addEventListener('load', function(){
   if (requestDateSearch.responseText == 'No Photos Found For This Day') {
    noImages();
  } else {
   showImages();
  }
});

//creates images div

function showImages() {
 var images = JSON.parse(requestDateSearch.responseText);
 var imagesDiv = document.getElementById('opportunity-images');
 while(imagesDiv.firstChild){
   imagesDiv.removeChild(imagesDiv.firstChild);
 }
 for (var image in images) {
  var imgTag = document.createElement('img');
  imgTag.src = images[image];
  imgTag.setAttribute('width', '400px');
  imgTag.setAttribute('height', '400px');
  imgTag.alt = 'curiosity rover image';
  imgTag.className = 'img-thumbnail';
  document.getElementById('opportunity-images').appendChild(imgTag);
  document.getElementById('opportunity-images').style.display = 'block';
  document.getElementById('curiosity-images').style.display = 'none';
  document.getElementById('spirit-images').style.display = 'none';
  document.getElementById('noPhotos').style.display = 'none';
    }
  }
}

//Spirit Search

var searchSpirit = document.getElementById('spirit-search');

function spiritDateSelection() {
  var datePicked = new Object();
  datePicked.opportunityDate = document.forms[2].elements.spirit.value;
  return JSON.stringify(datePicked);
}

function submitSpiritDate(event) {
  event.preventDefault();
  var requestDateSearch = new XMLHttpRequest();
  requestDateSearch.open('GET', '/spirit-rover/' + document.forms[2].elements.spirit.value, true);
  requestDateSearch.setRequestHeader('Content-type', 'application/json');
  requestDateSearch.send(spiritDateSelection());
  requestDateSearch.addEventListener('load', function(){
   if (requestDateSearch.responseText == 'No Photos Found For This Day') {
    noImages();
  } else {
   showImages();
  }
});

//creates images div

function showImages() {
 var images = JSON.parse(requestDateSearch.responseText);
 var imagesDiv = document.getElementById('spirit-images');
 while(imagesDiv.firstChild){
   imagesDiv.removeChild(imagesDiv.firstChild);
 }
 for (var image in images) {
  var imgTag = document.createElement('img');
  imgTag.src = images[image];
  imgTag.setAttribute('width', '400px');
  imgTag.setAttribute('height', '400px');
  imgTag.alt = 'curiosity rover image';
  imgTag.className = 'img-thumbnail';
  document.getElementById('spirit-images').appendChild(imgTag);
  document.getElementById('spirit-images').style.display = 'block';
  document.getElementById('curiosity-images').style.display = 'none';
  document.getElementById('opportunity-images').style.display = 'none';
  document.getElementById('noPhotos').style.display = 'none';
    }
  }
}

//show error message - No photos

function noImages() {
  document.getElementById('noPhotos').textContent = 'Sorry, no photos found for this day. Please search again.';
  document.getElementById('noPhotos').style.display = 'block';
  document.getElementById('curiosity-images').style.display = 'none';
  document.getElementById('opportunity-images').style.display = 'none';
  document.getElementById('spirit-images').style.display = 'none';
}

searchCuriosity.addEventListener('click', submitCuriosityDate, false);
searchOpportunity.addEventListener('click', submitOpportunityDate, false);
searchSpirit.addEventListener('click', submitSpiritDate, false);
