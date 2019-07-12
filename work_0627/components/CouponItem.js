import React from 'react'

class CouponItem extends React.Component {
	render() {
		return (
			<li style={{position: 'relative', marginBottom: '6px', backgroundColor: '#fff6ee', borderRadius: '2px', boxShadow: '0 2px 4px 0 rgba(163, 162, 162, 0.5)', borderLeft: '8px #ffffff solid'}} onClick={this.props.onClick}>
				<div style={{padding: '12px 0 11px 13px'}}>
					<p style={{fontSize: '15px', color: '#4a4a4a', letterSpacing: '-0.36px', margin: '0'}}>{this.props.content.title}</p>
					<p className="d-none d-md-block" style={{fontSize: '14px', color: '#9b9b9b', letterSpacing: '-0.34px', margin: '0'}}>活動時間：{this.props.content.startDate} - {this.props.content.endDate}</p>
				</div>
				<img src="/static/next-page_2.svg" style={{width: '8px', height: '15px', position: 'absolute', top:'50%', right: '18px', transform: 'translate(0, -50%)'}} />		
			</li>
		)
	}
}


export default CouponItem