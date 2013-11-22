// this is only for testing and simulating the arrival of json information
// trying to convert information from the form into json format - for simulation purpose
function simulationTest(){

	//init
	log_id = "log_field";
	log_field = window.document.getElementById(log_id);
	client = new Object();
	client.no = window.document.getElementById("num_etudiant").value;
	client.name = window.document.getElementById("nom_etudiant").value;
	client.firstname = window.document.getElementById("prenom_etudiant").value;
	client.classe = window.document.getElementById("class").value;
	client.notification = window.document.getElementById("notification").value;	
	client.edt = window.document.getElementById("edt").value;	

	// write int the log field
	log_field.innerHTML = log_field.innerHTML + "<br><br>Client Data> "
					 + "&nbsp&nbsp;[no: " + client.no
					 + "]&nbsp;&nbsp;[Nom: " + " " + client.name
					 + "]&nbsp;&nbsp;[Pr&eacute;nom: " + " " + client.firstname
					 + "]&nbsp;&nbsp;[Classe: " + " " + client.classe
					 + "]&nbsp;&nbsp;[Notification: " + " " + client.notification
					 + "]&nbsp;&nbsp;[Edt: " + " " + client.edt + "]";
					 
	//convert client object into json format
	//var jsonData = JSON.stringify(client);
	
	ok = true; // the test continue
	
	if(jsonData = JSON.stringify(client)){
		log_field.innerHTML = log_field.innerHTML + "<br><b style=\"color:green;\">Jsondata generated properly</b><br>Data formated to Json>  " + jsonData;
		ok = true; // the test continue
	}else{
		log_field.innerHTML = log_field.innerHTML + "<br><br> <b style=\"color:red\">Json Generation failed</b>";
		ok = false; // the test stop
	}
	
	//continue test
	if(ok){
		// convert the json data into javascript object
		if(newClient = JSON.parse(jsonData)){
			log_field.innerHTML = log_field.innerHTML + "<br><br><b style=\"color:green;\">Conversion from json to object success!</b>";
			log_field.innerHTML = log_field.innerHTML + "<br>Json to Object> "
							 + "&nbsp&nbsp;[no: " + newClient.no
							 + "]&nbsp;&nbsp;[Nom: " + " " + newClient.name
							 + "]&nbsp;&nbsp;[Pr&eacute;nom: " + " " + newClient.firstname
							 + "]&nbsp;&nbsp;[Classe: " + " " + newClient.classe
							 + "]&nbsp;&nbsp;[Notification: " + " " + newClient.notification
							 + "]&nbsp;&nbsp;[Edt: " + " " + newClient.edt + "]";
							 
			displayData(newClient);
			ok = true; // the test continue
		}else{
			log_field.innerHTML = log_field.innerHTML + "<br><br> <b style=\"color:red\">Json Generation failed</b>";
			ok = false; // the test stop
		}
	}
}

// display content of client objet to the stimboard
function displayData(clientObj)
{
	//display informations
	studentField = window.document.getElementById('info');
	studentField.innerHTML = clientObj.name + " " + clientObj.firstname + "<br>" + clientObj.classe + "<br>" + clientObj.no;
	
	notifField = window.document.getElementById('nota');
	notifField.value = clientObj.notification;
}