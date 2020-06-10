function openPage(pageUrl){
    window.location.replace(pageUrl);
  }

function openPageNew(pageUrl){
window.open(pageUrl);
}


// Panel 1
var panelPArt = 0;

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (panelPArt==0 && e.which==32){
    document.getElementById("panel1").src = "../images/ClassroomU3.png" ;
    panelPArt++;
    console.log(panelPArt);
  }
  else if (panelPArt==1 && e.which==32){
    document.getElementById("panel1").src = "../images/ClassroomU3.png" ;
      $('.dialogue1').fadeIn(2000);  
    panelPArt++;
    console.log(panelPArt);

  }
  else if (panelPArt == 2 && e.which==32){
    document.getElementById("panel1").src = "../images/ClassroomU3.png" ;
    panelPArt++;
    console.log(panelPArt);

  }
}

