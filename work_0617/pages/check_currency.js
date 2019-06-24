import Header from '../components/Header';

/*
let all_rate;



var $d = $.Deferred();


var xmlHTTP;

function $_xmlHttpRequest() {   
    if (window.ActiveXObject) {
        xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
    } else if(window.XMLHttpRequest) {
        xmlHTTP = new XMLHttpRequest();
    }
}

function check() {  
    $_xmlHttpRequest();
    xmlHTTP.open("GET","http://data.fixer.io/api/latest?access_key=e8984e205db89c1c5523644643ed7d28",true);
    xmlHTTP.onreadystatechange = function check_user() {
        if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
            var str = xmlHTTP.responseText;
            all_rate = JSON.parse(str);
            console.log(all_rate);
        }
    }
    xmlHTTP.send(null);
}

check();




function check_currency() {
	return (

		<div>歐元:美元{all_rate.rates.EUR}</div>
	)
}


export default check_currency
*/
<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>






function check_currency() {
	return (
		<div>
			{

				$.ajax({
					url: 'http://data.fixer.io/api/latest?access_key=e8984e205db89c1c5523644643ed7d28',
					dataType: 'json',
					type: 'get'
					}).done(function() {
						console.log("成功啦！");
					})
			}
		
			
		</div>
	)




}



export default check_currency