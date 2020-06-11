// variable to keep track of the scene
// To animate the Panels one by one on each click, making it interactive
// using a counter "panelPart5" to check on which stage the user is within the panel as each click increments the counter

var panelPArt = 0;
document.getElementById("continue").style.display="none";

document.getElementById("end").style.display="none";
document.addEventListener('keydown', logKey);

//function checks the part in the scene and displays dialogues and changes background
function logKey(e) {
  if (panelPArt==0 && e.which==32){
    document.getElementById("panel1").src = "Classroom2.png" ;
    panelPArt++;
    
  }
  else if (panelPArt==1 && e.which==32){
    //dialogue of the kids
      $('#dialogue1').fadeIn(2000);  
      $('#dialogue11').fadeIn(2000); 
      $('#dialogue12').fadeIn(2000);
      
    panelPArt++;

  }
  else if (panelPArt == 2 && e.which==32){
    //Kashif's dialogues
    $('#dialogue11').fadeOut(0); 
    $('#dialogue12').fadeOut(0);
    $('#dialogue1').fadeOut(0); 
    $('#dialogue2').fadeIn(2000); 

    panelPArt++;
    

  }
  else if (panelPArt == 3 && e.which==32){
    $('#dialogue3').fadeIn(2000); 
    setTimeout(document.getElementById("end").style.display="block", 2000); 
    panelPArt++;
    
  }

  else if(panelPArt==4){
    //display the button
    setTimeout(function(){
      document.getElementById("continue").style.display="block"; 
    },1000);
  }
}