import React from 'react'


class ShopList extends React.Component {
	render() {
		let shops = this.props.shops;
		let selectShop = this.props.selectShop;

		return (
			<div>
				{shops.map((shop, index) => (
					<span onClick={() => selectShop(index)}>{shop.name}</span>
				))}
			</div>
		)
	}
}


/*
const ShopList = ({ shops }) => (
  <div>
    {shops.map(shop => (
	    <div>
	      	<span>{shop.name}</span>
	    </div>
    ))}
  </div>
)
*/

export default ShopList