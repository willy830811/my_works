import React from 'react'

import Header from './Header'
import LoadedShop from '../containers/LoadedShop'
import LoadedCoupon from '../containers/LoadedCoupon'
import LoadedContent from '../containers/LoadedContent'


class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<br />
				<LoadedShop />
				<br />
				<LoadedCoupon />
				<br />
				<LoadedContent />
			</div>
		)
	}
}

export default App