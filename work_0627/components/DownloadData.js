import React from 'react'
import axios from 'axios'
import { downloadData } from '../actions'


let limit;
let lat;
let lon;

function DownloadData() {
	console.log('toto');
	axios.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&index=0&limit=5&lat=24.986913&lon=121.455948'
		).then(function (response) {
			console.log(store.getState());
			//store.dispatch(downloadData(response.data.branch));
			downloadData()
			console.log(store.getState());
		}).catch(function (error) {
			console.log('error');
	});
}



export default DownloadData