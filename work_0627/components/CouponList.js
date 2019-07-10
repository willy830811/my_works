import React from 'react'
import CouponItem from './CouponItem'

import ShopBanner from './ShopBanner'


class CouponList extends React.Component {
	render() {
		let shop = this.props.shop;
		let coupons = this.props.coupons;
		let selectCoupon = this.props.selectCoupon;
		let nextPage = this.props.nextPage;

		if (coupons.length === 1) {
			selectCoupon('0');
			nextPage();
		}

		return (
			<div className="container-fluid" style={{padding: '0', marginTop: '22px'}}>
				<div className="row" style={{margin: '0'}}>
					<div className="col-12 col-md-4" style={{padding: '0 6px 10px 6px'}}>
						<ShopBanner />
					</div>
					<div className="col-12 col-md-8" style={{padding: '0 6px 10px 6px'}}>
						<ul className="list-unstyled">
							{coupons.map((coupon, index) => (
								<CouponItem key={index} onClick={() => {selectCoupon(index); nextPage();}} content={coupon} />
							))}
						</ul>
					</div>

				</div>
			</div>
		)
	}
}

export default CouponList