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
			<div className="container-fluid" style={{padding: '70px 0 0 0'}}>
				<div className="row d-none d-md-flex" style={{position: 'relative', height: '62px', margin: '0', zIndex: '1'}}>
					<div className="col-4" style={{padding: '0'}}></div>
					<div className="col-8" style={{padding: '0'}}>
						<p style={{margin: '6px 0 0 0', fontSize: '26px', letterSpacing: '-0.63px', color: '#232323'}}>優惠項目</p>
					</div>
				</div>
				<div className="row" style={{margin: '0', padding: '0 6px 10px 6px'}}>
					<div className="col-12 col-md-4" style={{padding: '0', marginBottom: '10px'}}>
						<ShopBanner />
					</div>
					<div className="col-12 col-md-8" style={{padding: '0'}}>
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