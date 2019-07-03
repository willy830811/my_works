import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '../reducers'
import App from '../components/App'
//import {data} from '../components/DownloadData'

import { downloadData } from '../actions'



const store = createStore(reducer);

function callData() {
	axios.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&secondarCategory=&index=0&limit=5&lat=24.986913&lon=121.455948'
		).then(function (response) {
			console.log(store.getState());
			store.dispatch(downloadData(response.data.branch));
			console.log(store.getState());
		}).catch(function (error) {
	});
}

callData();



function Index() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

export default Index