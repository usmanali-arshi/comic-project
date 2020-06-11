// To animate the Panels one by one on each click, making it interactive
// using a counter "panelPart5" to check on which stage the user is within the panel as each click increments the counter

var panelPart5=0
// To display the button for continue at the end of all the animations within the panel 
document.getElementById("continue").style.display="none";
function animatePanels(){

	if(panelPart5==0){
		$('#dialogue1').fadeIn(1000);
		panelPart5++;
	}

	else if(panelPart5==1){
		$('#dialogue1').fadeOut(0);
		$('#dialogue2').fadeIn(1000);
		panelPart5++;
	}

	else if(panelPart5==2){
		// changing the photo as Layla is conversing with Kashif
		// document.getElementById("panelx").src = "images/panel4/panel4-second.png" ;
		$('#dialogue2').fadeOut(0);
		$('#dialogue3').fadeIn(2000);
		panelPart5++;
	}

	else if(panelPart5==3){
		$('#dialogue3').fadeOut(0);
		panelPart5++;
		// changing photo a bit late as Kashif starts talking to Anas after conversing with Layla Half way
		// setTimeout(function(){
		// 	document.getElementById("panelx").src = "images/panel4/panel4-first.png" ;
		// }, 2000);
		$('#dialogue4').fadeIn(1000);
		setTimeout(function(){
			document.getElementById("continue").style.display="block"; 
		},1500);
		setTimeout(function(){
			$('#dialogue4').fadeOut(1000); 
		},6000); 	
	}
}

$("#panel5").on("click", animatePanels);