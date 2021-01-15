'use strict';

$('#home').on("click", function(){
  Redirect();
});



function Redirect() {
    location.href="newtab.html";
}

function listView() {
  document.getElementById("demo1").style.gridTemplateColumns=" 1fr";
}


function gridView() {
  document.getElementById("demo1").style.gridTemplateColumns=" 1fr 1fr 1fr";
}

$('#switch-1').on("click", function(){
  console.log("click vo orange");
  document.getElementById("switcher-id").href = 'styles/themes/orange.css';
  localStorage.setItem('style', 'orange');
});  

$('#switch-3').on("click", function(){
  console.log("click vo orange");
  document.getElementById("switcher-id").href = 'styles/themes/purple.css';
  localStorage.setItem('style', 'purple');
});  

$('#switch-2').on("click", function(){
  console.log("click vo sky");
  document.getElementById("switcher-id").href = 'styles/themes/sky.css';
  localStorage.setItem('style', 'sky');
}); 

$('#switch-4').on("click", function(){
  console.log("click vo dark");
  document.getElementById("switcher-id").href = 'styles/themes/dark.css';
  localStorage.setItem('style', 'dark');
}); 
 
$('.audio').click(function(){
  playaudio();
});

$('.pauseaudio').click(function(){
  pauseaudio();
});

function playaudio (){
  console.log("click vo playaudio");
    document.getElementById("sound").innerHTML = `
      <div class='fas fa-volume-up pauseaudio' style='font-size:48px;'></div>
      <audio autoplay loop>
        <source src="audio.mp3">
      </audio>
    `;
  }
function pauseaudio(){
  
    document.getElementById("sound").innerHTML = `<div class='fas fa-volume-mute audio' style='font-size:48px;'></div>
<audio muted>
  <source src="audio.mp3">
</audio>`;
}
