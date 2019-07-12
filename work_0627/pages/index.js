import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '../reducers'
import App from '../components/App'

import DownloadData from '../components/DownloadData'



function Index() {

	const store = createStore(reducer);
	if (typeof window !== 'undefined') {
		window.appStore = store;
		DownloadData();
	}

	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}



export default Index