import React from 'react'
import axios from 'axios'
import { downloadData } from '../actions'


let index = 0;
let limit = 10;
let lat = 25;
let lon = 121;
/*
if (typeof window !== 'undefined') {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(res){
			console.log(res.coords);
			lat = res.coords.latitude;
			lon = res.coords.longitude;
		}, function(error){
			console.log(error);
			
		});
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}
*/


function DownloadData() {
	const store = window.appStore

	axios.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&index='+index+'&limit='+limit+'&lat='+lat+'&lon='+lon
		).then(function (response) {
			store.dispatch(downloadData(response.data.branch));
		}).catch(function (error) {
			console.log(error);
	});
}

export default DownloadData