// To animate the Panels one by one on each click, making it interactive
// using a counter to check on which stage the user is within the panel as each click increments the counter

var panelPart4=0
function animatePanels(){

	if(panelPart4==0){
		$('#dialogue1').fadeIn(1000);
		panelPart4++;
	}

	else if(panelPart4==1){
		$('#dialogue1').fadeOut(0);
		$('#dialogue2').fadeIn(1000);
		panelPart4++;
	}

	else if(panelPart4==2){
		// changing the photo as Layla is conversing with Kashif
		document.getElementById("panelx").src = "images/panel4/panel4-second.png" ;
		$('#dialogue2').fadeOut(0);
		$('#dialogue3').fadeIn(2000);
		panelPart4++;
	}

	else if(panelPart4==3){
		$('#dialogue3').fadeOut(0);
		panelPart4++;
		// changing photo a bit late as Kashif starts talking to Anas after conversing with Layla Half way
		setTimeout(function(){
			document.getElementById("panelx").src = "images/panel4/panel4-first.png" ;
		}, 2000);
		$('#dialogue4').fadeIn(1000);	
	}
}

$("#panel4").on("click", animatePanels);