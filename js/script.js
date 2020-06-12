function openPage(pageUrl){
    window.location.href = pageUrl;
  }

function openPageNew(pageUrl){
window.open(pageUrl);
}
// var x = document.getElementById('mood').autoplay;

var emotional = $("#song")[0];
$("#mood").on('mouseenter', function(){
  emotional.play();
});