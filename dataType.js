// var $ = function (id) {
// 	return document.getElementById(id);
// }

function displayMessage()
{
	//alert("Hello! I am an alert box!!");

	var today = new Date();   
	
	var todaymm  = today.getMonth() + 1;
	var todaydd  = today.getDate();
	var todayyyy = today.getFullYear();
	
	
	var todayformatted = todayyyy.toString() + '-' + todaymm.toString() + '-' + todaydd.toString(); 
			   
			   
    //$("#mymsg").innerHTML = myText;
    
    var outputTextBox = document.getElementById('mymsg');
    outputTextBox.innerText = "Today's date is " + todayformatted;
}

//window.onload = function ()
//{
	//$("#mybutton").onclick = displayMessage();  
//}