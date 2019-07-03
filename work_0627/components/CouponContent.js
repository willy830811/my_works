import React from 'react'

class CouponContent extends React.Component {
	render() {

		let content = this.props.content


		return (
			<div>
				
				<span>{content}</span>
				
			</div>
		)
	}
}

export default CouponContent