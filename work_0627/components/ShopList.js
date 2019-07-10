import React from 'react'
import ShopItem from './ShopItem'



class ShopList extends React.Component {
	render() {
		let shops = this.props.shops;
		let selectShop = this.props.selectShop;
		let nextPage = this.props.nextPage;
		let toggleMode = this.props.toggleMode;
		
		return (
			<div>
				<div className="container-fluid" style={{padding: '70px 0 0 0'}}>
					<div className="d-none d-md-block" style={{position: 'relative', width: '100%', height: '62px', paddingLeft:'15px', zIndex: '1'}} onClick={() => toggleMode()}>
						<p style={{margin: '6px 0 0 0', fontSize: '26px', letterSpacing: '-0.63px', color: '#232323'}}>優惠列表</p>
						<img src="/static/left-on.svg" style={{position: 'absolute', right: '24px', top: '9px', width: '90px'}} />
					</div>
					<ul className="row list-unstyled" style={{margin: '0', padding: '0 6px 10px 6px'}}>
						{shops.map((shop, index) => (
							<li className="col-12 col-md-4" style={{padding: '0'}}>
								<ShopItem key={index} onClick={() => {selectShop(index); nextPage();}} content={shop} />
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