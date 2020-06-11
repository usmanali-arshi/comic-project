// To animate the Panels one by one on each click, making it interactive
// using a counter "panelPart6" to check on which stage the user is within the panel as each click increments the counter

var panelPart6=0;
// To display the button for continue at the end of all the animations within the panel 
document.getElementById("end").style.display="none";
function animatePanels(){

  if(panelPart6==0){
    document.getElementById("panelx").src = "images/panel6/panel6-2.png" ;
    panelPart6++;
  }

  else if(panelPart6==1){
    document.getElementById("panelx").src = "images/panel6/panel6-3.png" ;
    panelPart6++;
  }

  else if(panelPart6==2){
    document.getElementById("panelx").src = "images/panel6/panel6-4.png" ;
    $('#panelx').height(530);
    panelPart6++;
  }

  else if(panelPart6==3){
    document.getElementById("panelx").src = "images/panel6/panel6-5.png" ;
    panelPart6++;
 
  }
  else if(panelPart6==4){
    document.getElementById("panelx").src = "images/panel6/panel6-6.png" ;
    panelPart6++;
    // setTimeout(function(){
    //   document.getElementById("end").style.display="block"; 
    // },1500);
 
  }
  else if(panelPart6==5){
    // alert("noob");
    // document.getElementById("end-game").css("background-color", "black");
    // $('header1').css("background-image","url('../images/black.png')");
    document.getElementById("panelx").src = "images/panel6/black.png";
    
    // $('#end-game').fadeIn(2000);
    setTimeout(function(){
      document.getElementById("end").style.display="block"; 
    },1000);
    panelPart6++;
  }
  else if(panelPart6==6){
      alert("What more do you want from him? He's numbed at this point!");
  }
}

$("#panel6").on("click", animatePanels);













// var Part = 0;

// document.getElementById("end").style.display="none";
// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   if (Part==0 && e.which==32){
//     setTimeout(document.getElementById("msg").src = "images/panel6/panel6-2.png", 2000);
//     Part++;
    
//   }
//   else if (Part==1 && e.which==32){
//       setTimeout(document.getElementById("msg").src = "images/panel6/panel6-3.png", 2000);
//       Part++;
  
//   }
//   else if (Part == 2 && e.which==32){
//     setTimeout(document.getElementById("msg").src = "images/panel6/panel6-4.png", 2000);
    
//  	  setTimeout(document.getElementById("end").style.display="block", 2000); 
//     Part++;}
    

 

//   else if(Part==3){
//       alert("What more do you want from him? He's numbed at this point!");
//   }
// }