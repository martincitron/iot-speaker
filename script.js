function speak(lang, vtext) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             //alert(this.responseText);
         }
    };
    xhttp.open("POST", "https://api.eu-de.apiconnect.appdomain.cloud/nemeckoorg-germany/sb/iotapi/speak", true);
    xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("x-ibm-client-secret", "B5cQ5nJ0rB1yG8iR0uR5aE6qT3jR2lH2mG4dJ0pG8jW7jI1uO2");
	xhttp.setRequestHeader("x-ibm-client-id", "65a9121f-5dc2-41f1-857b-42c88ac6b421");
	//xhttp.setRequestHeader("x-ibm-client-id", "6a9121f-5dc2-41f1-857b-42c88ac6b421");
    xhttp.send("{" +
    "\"text\":\"" + vtext + "\"," +
    "\"lang\":\"" + lang + "\"}");
}