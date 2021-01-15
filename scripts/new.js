'use strict';

$('#new').on("click", function(){
  loadNews();
});

function showNews(news){

	return `<div class="card" >
      <h2>Music ${news.name} </h2>
      <img src=" ${news.image}" width=375px height=200px >
      
    </div>
	`

}
function switch_list_grid(){
  return `
     <button class="btn " onclick="listView()"><i class="fa fa-bars"></i> </button> 
      <button class="btn " onclick="gridView()"><i class="fa fa-th-large"></i> </button>
   `
  
}


function loadNews() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var news_array = JSON.parse(this.responseText);
      document.getElementById("demo1").innerHTML = ` ${news_array.map(showNews).join('  ')}`;
      document.getElementById("switch_list_grid").innerHTML= switch_list_grid();
    }
  };
  xhttp.open("GET", chrome.extension.getURL("data/new.json"), true);
  xhttp.send();
}

