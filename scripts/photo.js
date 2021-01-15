'use strict';
$('#image').on("click", function(){
  loadImage();
});

function showPhoto(photo){
	return `
	<div class="card" >
      <h2>Photo: ${photo.name}</h2>
      <img src= " ${photo.image}" height =200px  width=375px>

    </div>
	`

}
function switch_list_grid(){
  return `
     <button class="btn " onclick="listView()"><i class="fa fa-bars"></i> </button> 
      <button class="btn " onclick="gridView()"><i class="fa fa-th-large"></i> </button>
   `
  
}
function loadImage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var photos_arr = JSON.parse(this.responseText);
      console.log(photos_arr[1]);
      document.getElementById("demo1").innerHTML = ` ${photos_arr.map(showPhoto).join(' ')}`;
      document.getElementById("switch_list_grid").innerHTML= switch_list_grid();

    }
  };
  xhttp.open("GET", chrome.extension.getURL("data/photo.json"), true);
  xhttp.send();
}