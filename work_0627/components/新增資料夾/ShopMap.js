import React from "react"
import { connect } from 'react-redux'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import ShopItem from './ShopItem'

import { selectMarker } from '../actions'


//
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");



const MyMapComponent = withScriptjs(withGoogleMap((props) =>
	<div>
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{ lat: 24.986913, lng: 121.455948 }}
		>
			{props.isMarkerShown && <Marker position={{ lat: 24.986913, lng: 121.455948 }} onClick={props.onMarkerClick} />}
			{props.shops.map((shop, index) => (
				<Marker key={index} position={{ lat: parseFloat(shop.lat), lng: parseFloat(shop.lon) }} onClick={() => props.selectMarker(index)} />
			))}

			<div className="position-absolute" style={{top:'0', zIndex: '0'}}>
				<span>{props.shops[props.marker].name}</span>
			</div>
		</GoogleMap>
		
	</div>
))


class ShopMap extends React.PureComponent {
	state = {
		isMarkerShown: false,
	}

	componentDidMount() {
		this.delayedShowMarker()
	}

	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true })
		}, 3000)
	}

	handleMarkerClick = (index) => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	}

	render() {
		return (
			<MyMapComponent
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt95qTXK2VBIGWxB8CiCWe8eBV475edOg&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				
				shops = {this.props.shops}
				marker = {this.props.marker}
				selectMarker = {this.props.selectMarker}
			/>
		)
	}
}


const mapStateToProps = state => ({
	shops: state.data,
	marker: state.data_now.index_marker
})

const mapDispatchToProps = dispatch => ({
	selectMarker: (index) => dispatch(selectMarker(index))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopMap)