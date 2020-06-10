var Part = 0;

document.getElementById("end").style.display="none";
document.addEventListener('keydown', logKey);

function logKey(e) {
  if (Part==0 && e.which==32){
    setTimeout(document.getElementById("msg").src = "images/panel6/Whatsapp2.png", 2000);
    Part++;
    
  }
  else if (Part==1 && e.which==32){
      setTimeout(document.getElementById("msg").src = "images/panel6/Whatsapp3.png", 2000);
      Part++;
  
  }

else if (Part==2 && e.which==32){
      setTimeout(document.getElementById("msg").src = "images/panel6/Whatsapp4.png", 2000);
      Part++;
  
  }

  else if (Part == 3 && e.which==32){
    
 	setTimeout(document.getElementById("end").style.display="block", 2000); 
    Part++;}
    

 

  else if(Part==4){
      alert("What more do you want from him? He's numbed at this point!");
  }
}