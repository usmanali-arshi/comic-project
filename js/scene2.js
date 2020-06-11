// To animate the Panels one by one on each click, making it interactive
// using a counter to check on which stage the user is within the panel as each click increments the counter
var panel2Part = 0;
// To display the button for continue at the end of all the animations within the panel 
document.getElementById("end").style.display="none";

function animatePanels(){

  if(panel2Part==0){
    document.getElementById("panel2").src = "panel 2.png" ;
    $( ".girl" ).animate({ "left": "+=140px" },1500);
    $('#dialogue1').fadeIn(1000);
    panel2Part++;
  }

  else if(panel2Part==1){
    document.getElementById("panel2").src = "panel 22.png" ;
     $( ".girl" ).fadeOut(0);
     $('#dialogue11').fadeIn(2000); 
    panel2Part++;
  }

  else if(panel2Part==2){
    
    $('#dialogue11').fadeOut(0); 
    $('#dialogue2').fadeIn(2000);
    panel2Part++;
  }

  else if(panel2Part==3){
    document.getElementById("panel3").src = "panel 3.png" ;
    panel2Part++; 
  }

  else if(panel2Part==4){
     $('#dialogue3').fadeIn(2000);
    panel2Part++; 
  }

   else if (panel2Part == 5){
    $('#dialogue3').fadeOut(0);
    $('#dialogue4').fadeIn(2000); 
    panel2Part++;
  }


  else if (panel2Part == 6){
    $('#dialogue4').fadeOut(0);
    $('#dialogue5').fadeIn(2000); 
    document.getElementById("panel3").src = "panel 3 blush.png" ;
    panel2Part++;
  }

  else if (panel2Part == 7){
    setTimeout(document.getElementById("end").style.display="block", 2000); 
    panel2Part++;
  }

}

$("#panel2").on("click", animatePanels);
$("#panel3").on("click", animatePanels);








// // function triggered when spacebar pressed, checks the scene and displays the dialogues
// function logKey(e) {
//   if (panel2Part==0 && e.which==32){
//     document.getElementById("panel2").src = "panel 2.png" ;
   
//     $( ".girl" ).animate({ "left": "+=140px" },1500);
//     console.log("Hello")
//     panel2Part++;
    
//   }
//   else if (panel2Part==1 && e.which==32){
//       document.getElementById("panel2").src = "panel 22.png" ;
//       $( ".girl" ).fadeOut(0);
//       $('#dialogue11').fadeIn(2000); 
     
      
//       panel2Part++;
  
//   }
//   else if (panel2Part == 2 && e.which==32){
//     $('#dialogue11').fadeOut(0); 
//     $('#dialogue2').fadeIn(2000); 
//     panel2Part++;
//   }
 
//   else if (panel2Part == 3 && e.which==32){
//     document.getElementById("panel3").src = "panel 3.png" ;
//     panel2Part++;

//   }
//   else if (panel2Part == 4 && e.which==32){
//     $('#dialogue3').fadeIn(2000); 
//     panel2Part++;

//   }
//   else if (panel2Part == 5 && e.which==32){
//     $('#dialogue3').fadeOut(0);
//     $('#dialogue4').fadeIn(2000); 
//     panel2Part++;

//   }
//   else if (panel2Part == 6 && e.which==32){
//     $('#dialogue4').fadeOut(0);
//     $('#dialogue5').fadeIn(2000); 
//     document.getElementById("panel3").src = "panel 3 blush.png" ;
//     panel2Part++;

//   }
//   else if (panel2Part == 7 && e.which==32){
//     setTimeout(document.getElementById("end").style.display="block", 2000); 
    // panel2Part++;

  

//   else if (panel2Part == 5 && e.which==32){
//     // $('#dialogue3').fadeIn(2000); 
//     panel2Part++;
   

//   }

  
