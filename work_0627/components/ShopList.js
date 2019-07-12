import React from 'react'
import ShopItem from './ShopItem'



class ShopList extends React.Component {
	render() {
		let shops = this.props.shops;
		let selectShop = this.props.selectShop;
		let nextPage = this.props.nextPage;
		let toggleMode = this.props.toggleMode;
		//, position: 'absolute', right: '24px', top: '9px'
		return (
			<div>
				<div className="container-fluid" style={{padding: '70px 0 0 0'}}>
					<div className="d-none d-md-block" style={{position: 'relative', width: '100%', height: '49px', marginBottom: '13px', paddingLeft:'15px', zIndex: '1'}}>
						<p style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '49px', margin: '0', float: 'left', fontSize: '26px', letterSpacing: '-0.63px', color: '#232323'}}>優惠列表</p>
						<div style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '49px', float: 'right', marginRight: '8px'}} onClick={() => toggleMode()}>
							<img src="/static/left-on.svg" style={{width: '90px'}} />
						</div>
					</div>
					<ul className="row list-unstyled" style={{margin: '0', padding: '0 6px 10px 6px'}}>
						{shops.map((shop, index) => (
							<li key={index} className="col-12 col-md-4" style={{padding: '0'}}>
								<ShopItem onClick={() => {selectShop(index); nextPage();}} content={shop} />
							</li>
						))}
					</ul>
				</div>

				<div className="d-block d-md-none position-fixed" style={{right: '12px', bottom: '9px'}} onClick={() => toggleMode()}><img src="/static/left-on.svg" style={{width: '90px'}} /></div>
			</div>
		)
	}
}

export default ShopList