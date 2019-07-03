import React from 'react'
import CouponItem from './CouponItem'


class CouponList extends React.Component {
	render() {
		let coupons = this.props.coupons;
		let selectCoupon = this.props.selectCoupon;

		return (
			<div>
				{coupons.map((coupon, index) => (
					<span onClick={() => selectCoupon(index)}>{coupon.title}</span>
				))}
			</div>
		)
	}
}

export default CouponList