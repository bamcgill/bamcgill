

function postDataBody(url, contentType, username, password, sqlText, callback) {
	var XHR = new XMLHttpRequest();
	// We define what will happen if the data are successfully sent
	XHR.addEventListener("load", function(event) {
		// note that sometimes the response will be html with a link to login ,
		// sometimes it will be json
		callback({eventValue:event, status:XHR.status});
	});

	// We define what will happen in case of error
	XHR.addEventListener("error", function(event) {
		callback({eventValue:event, status:XHR.status});
	});

	callback({infoValue:"posting request"});
	
	// We setup our request
	XHR.open("POST", url);
	XHR.setRequestHeader('Content-Type', contentType);
	XHR.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
	
	// The data sent are the one the user provide in the form
	XHR.send(sqlText);
	callback({infoValue:"waiting on response"});

}

function postDataParam(url, contentType, username, password, sqlText, callback) {
	var XHR = new XMLHttpRequest();
	var params = "data=" + encodeURIComponent(sqlText);
	// We define what will happen if the data are successfully sent
	XHR.addEventListener("load", function(event) {
		saveFile(this.response);
	});
	
	callback({infoValue:"posting request"});
	// We setup our request
	XHR.open("POST", url, true);
	XHR.responseType = 'blob';
	XHR.setRequestHeader('Content-Type', contentType);
	XHR.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
	XHR.setRequestHeader("Content-length", params.length);
	XHR.setRequestHeader("Connection", "close");
	
	// The data sent are the one the user provide in the form
	XHR.send(params);
	callback({infoValue:"waiting on response"});
}

function saveFile(response){
	var blob = new Blob([response], {type: 'image/pdf'});
    //Create a link element, hide it, direct it towards the blob, and then 'click' it programatically
    let a = document.createElement("a");
    a.style = "display: none";
    document.body.appendChild(a);
    //Create a DOMString representing the blob and point the link element towards it
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'export.txt';
    //programatically click the link to trigger the download
    a.click();
    //release the reference to the file by revoking the Object URL
    window.URL.revokeObjectURL(url);
}