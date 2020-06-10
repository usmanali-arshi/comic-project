var panel2Part = 0;

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (panel2Part==0 && e.which==32){
    document.getElementById("panel2").src = "panel 2.png" ;
    console.log("Hello")
    panel2Part++;
    
  }
  else if (panel2Part==1 && e.which==32){
      $('#dialogue1').fadeIn(2000);  
      $('#dialogue11').fadeIn(2000); 
      $('#dialogue12').fadeIn(2000);
      
      panel2Part++;
  
  }
  else if (panel2Part == 2 && e.which==32){
    $('#dialogue11').fadeOut(0); 
    $('#dialogue12').fadeOut(0);
    $('#dialogue2').fadeIn(2000); 

    
    panel2Part++;
    

  }
  else if (panel2Part == 3 && e.which==32){
    $('#dialogue3').fadeIn(2000); 
    panel2Part++;
    

  }
  // else if (panelPArt == 4 && e.which==32){
  //   $('#dialogue3').fadeIn(2000); 
  //   panelPArt++;
   

  // }

  else if(panel2Part==4){
      alert("Go to next page");
  }
}