// variable to keep track of the scene
// To animate the Panels one by one on each click, making it interactive
// using a counter "panelPart5" to check on which stage the user is within the panel as each click increments the counter

var panelPArt = 0;
document.getElementById("continue").style.display="none";


//function checks the part in the scene and displays dialogues and changes background

function animatePanels(){

  if (panelPArt==0){
    document.getElementById("panel1").src = "Classroom2.png" ;
    panelPArt++;
  }

  else if (panelPArt==1){
    //dialogue of the kids
      $('#dialogue1').fadeIn(2000);  
      $('#dialogue11').fadeIn(2000); 
      $('#dialogue12').fadeIn(2000);
    panelPArt++;
  }

  else if (panelPArt == 2){
    //Kashif's dialogues
    $('#dialogue11').fadeOut(0); 
    $('#dialogue12').fadeOut(0);
    $('#dialogue1').fadeOut(0); 
    $('#dialogue2').fadeIn(2000); 
    panelPArt++;
  }

  else if(panelPArt==3){
    //display reply
    $('#dialogue3').fadeIn(2000); 
    panelPArt++;
  }

else if(panelPArt==4){
    //display the button
    setTimeout(function(){
      document.getElementById("continue").style.display="block"; 
    },1000);
  }

}

$("#panel1").on("click", animatePanels);
