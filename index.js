const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay(){
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le diste click al boton de play")
}
function handlePause(){
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("le diste click al boton de pause")
}