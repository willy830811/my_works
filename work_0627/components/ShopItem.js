import React from 'react'

class ShopItem extends React.Component {
	render() {

		let content = this.props.content;

		let style = {
			overflow: 'hidden',
			display: '-webkit-box',
			textOverflow: 'ellipsis',
			WebkitLineClamp:'1',
			WebkitBoxOrient: 'vertical',
		}

		let star = <img src="/static/star-on.svg" style={{height: '14px', marginRight: '4px'}}/>

		return (
			<div style={{position: 'relative', backgroundColor: '#ffffff', padding: '12px 19px 8px 6px', marginBottom: '10px', borderRadius: '2px', boxShadow: '0 2px 4px 0 rgba(163, 162, 162, 0.5)'}} onClick={this.props.onClick}>
				<div style={{display: 'flex'}}>
					<div style={{width: '48px', marginRight: '7px'}}>
						<img src={content.logo} style={{width: '100%'}} />
					</div>
					<div style={{flex: '1'}}>
						<p style={{fontSize: '15px', color: '#4a4a4a', letterSpacing: '-0.36px', marginBottom: '5px'}}>{content.name}</p>
						<p className="d-flex d-md-none" style={Object.assign({}, style, {fontSize: '14px', color: '#767676', letterSpacing: '-0.34px', marginBottom: '13px'})}>{content.event[0].title}</p>

						<div>
							<div style={{display: 'inline-block', lineHeight: '0', float: 'left'}}>
								{star}{star}{star}{star}{star}
							</div>
							<div style={{display: 'inline-block', lineHeight: '0', float: 'right'}}>
								<img src="/static/pin.svg" style={{verticalAlign: 'middle', height: '12.7px', marginRight: '9.3px'}}/>
								<span style={{lineHeight: '0', verticalAlign: 'middle', fontSize: '14px', color: '#bf3829', letterSpacing: '-0.34px'}}>{content.distance}km</span>
							</div>
						</div>

						<img className="d-inline-block d-md-none" src="/static/next-page_2.svg" style={{position:'absolute', height: '15px', width: '8px', top:'50%', right: '13px', transform: 'translate(0, -50%)'}} />
					</div>
				</div>
				<div>
					<div className="d-none d-md-block" style={{height: '252px'}}>
						<p style={Object.assign({}, style, {fontSize: '14px', color: '#767676',	lineHeight:'20px', margin: '0',	flex: '1'})}>{content.event[0].title}</p>
						<p style={{fontSize: '14px', color: '#767676'}}>{content.event[0].detail}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default ShopItem