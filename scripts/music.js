
'use strict';
$('#mucsic').on("click", function(){
  loadMusics();
});

function showMusicss(mu){

	return `<div class="card" >
      <h2>Music ${mu.name} </h2>
      <img src=" ${mu.image}" width=375px height=200px >
      
    </div>
	`

}
function switch_list_grid(){
  return `
     <button class="btn " onclick="listView()"><i class="fa fa-bars"></i> </button> 
      <button class="btn " onclick="gridView()"><i class="fa fa-th-large"></i> </button>
   `
}

function loadMusics() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var music_array = JSON.parse(this.responseText);
      document.getElementById("demo1").innerHTML = ` ${music_array.map(showMusicss).join('  ')}`;
      document.getElementById("switch_list_grid").innerHTML= switch_list_grid();
    }
  };
  //var xhr = new XMLHttpRequest();
  //var me = encodeURIComponent(document.getElementById("soko p cho nay a ").value);
  // xhr.onreadystatechange = function() {handleStateChange(me);}; // Implemented elsewhere.
  xhttp.open("GET", chrome.extension.getURL("data/music.json"), true);
  xhttp.send();
}

