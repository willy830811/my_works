import React from 'react'

import ShopBanner from './ShopBanner'

class CouponContent extends React.Component {
	render() {

		let content = this.props.content
		let coupon = this.props.coupon

		return (
			<div className="container-fluid" style={{padding: '0', marginTop: '22px'}}>
				<div className="row" style={{margin: '0'}}>
					<div className="col-12 col-md-4" style={{padding: '0 6px 10px 6px'}}>
						<ShopBanner />
					</div>

					<div className="col-12 col-md-8" style={{padding: '0 6px 27px 6px'}}>
						<div style={{backgroundColor: '#ffffff', padding: '13px 8px 20px 14px', borderRadius: '2px', boxShadow: '0 2px 4px 0 rgba(163, 162, 162, 0.5)'}}>
							<p style={{fontSize: '17px', fontWeight: '600', letterSpacing: '-0.41px', marginBottom: '4px'}}>{content.title}</p>
							<p style={{fontSize: '14px', color: '#9b9b9b', letterSpacing: '-0.34px', marginBottom: '9px'}}>活動時間：{this.props.content.startDate} - {this.props.content.endDate}</p>
							<p style={{fontSize: '14px', color: '#4a4a4a', lineHeight: '1.57', marginBottom: '0'}}>{content.detail}</p>
						</div>
						<div style={{padding: '13px 6px 0 6px'}}>
							<p style={{fontSize: '13px', color: '#d0021b', letterSpacing: '-0.31px', marginBottom: '4px'}}>注意事項</p>
							<p style={{fontSize: '13px', color: '#4a4a4a', letterSpacing: '-0.31px', lineHeight: '1.77'}}>{content.note}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CouponContent



/*
<img src={content.eventPic[0].url} />
				{
					content.eventPic.map((pic) => (
						<img src={pic.url} />
					))
				}

*/