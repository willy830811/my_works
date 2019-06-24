let all_rate;

function check() {
	let xmlHTTP;

	function $_xmlHttpRequest() {   
		if (window.ActiveXObject) {
			xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest) {
			xmlHTTP = new XMLHttpRequest();
		}
	}

	$_xmlHttpRequest();
	xmlHTTP.open("GET","http://data.fixer.io/api/latest?access_key=e8984e205db89c1c5523644643ed7d28", false);
	xmlHTTP.onreadystatechange = function check_user() {
		if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
			let str = xmlHTTP.responseText;
			all_rate = JSON.parse(str);
			
		}
	}
	xmlHTTP.send(null);
}

export {check, all_rate};