import React from 'react'
import { connect } from 'react-redux'
import { Z_BLOCK } from 'zlib';


class ShopBanner extends React.Component {
	render() {
		let shop = this.props.shop;
		let star = <img src="/static/star-on.svg" style={{height: '14px', marginRight: '4px'}}/>

		let style = {
			overflow: 'hidden',
			display: '-webkit-box',
			textOverflow: 'ellipsis',
			WebkitLineClamp:'1',
			WebkitBoxOrient: 'vertical'
		}

		return (
			<div style={{display: 'flex', height: '143px', width: '100%', padding: '21px 14px', borderRadius: '2px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px 0 rgba(163, 162, 162, 0.5)'}}>
				<div style={{display: 'inline-block', height: '100%', marginRight: '14px'}}>
					<img src={shop.logo} style={{height: '100%'}} />
				</div>

				<div style={{display: 'inline-block', flex: '1'}}>
					<div>
						<p style={Object.assign({}, style, {marginBottom: '1px', fontSize: '25px', color: '#000000', letterSpacing: '-0.6px'})}>{shop.name}</p>
						<p style={Object.assign({}, style, {marginBottom: '14px', fontSize: '16px', color: '#8d8c8c', letterSpacing: '-0.39px'})}>{shop.addr}</p>
					</div>
					<div>
						<div style={{display: 'inline-block', lineHeight: '0', float: 'left'}}>
							{star}{star}{star}{star}{star}
						</div>
						<div style={{display: 'inline-block', lineHeight: '0', float: 'right'}}>
							<img src="/static/pin.svg" style={{verticalAlign: 'middle', height: '12.7px', marginRight: '9.3px'}}/>
							<span style={{lineHeight: '0', verticalAlign: 'middle', fontSize: '14px', color: '#bf3829', letterSpacing: '-0.34px'}}>{shop.distance}km</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
/*
<div style={{display: 'inline-block', flex: '1'}}>
					<p style={Object.assign({}, style, {marginBottom: '1px', fontSize: '25px', color: '#000000', letterSpacing: '-0.6px'})}>{shop.name}</p>
					<p style={Object.assign({}, style, {marginBottom: '14px', fontSize: '16px', color: '#8d8c8c', letterSpacing: '-0.39px'})}>{shop.addr}</p>
					
					<div style={{position: 'relative'}}>
						<div style={{position: 'absolute', top: '50%', transform: 'translate(0, -50%)'}}>{star}{star}{star}{star}{star}</div>
						<div style={{position: 'absolute', top: '50%', right: '0', transform: 'translate(-100%, -50%)'}}>
							<img src="/static/pin.svg" style={{height: '12.7px', marginRight: '9.3px'}}/>
							<span style={{fontSize: '14px', color: '#bf3829', letterSpacing: '-0.34px'}}>{shop.distance}km</span>
						</div>
					</div>
				</div>
*/

/*



*/
const mapStateToProps = state => ({
	shop: state.data[state.data_now.index_shop]
})

export default connect(
	mapStateToProps,
	null
)(ShopBanner)