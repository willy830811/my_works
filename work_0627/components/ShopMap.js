import React from "react"
import { connect } from 'react-redux'

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import ShopItem from './ShopItem'

import { selectMarker } from '../actions'
import { selectShop } from '../actions'
import { nextPage } from '../actions'
import { toggleMode } from '../actions'

import { withStateHandlers } from "recompose"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"


const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCt95qTXK2VBIGWxB8CiCWe8eBV475edOg&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: 'calc(100%)', paddingTop: '48px' }} />,
		mapElement: <div style={{ height: '100%' }} />,

	}),

	withStateHandlers(() => ({
		isOpen: false,
	}), {
		onToggleOpen: ({ isOpen }) => () => ({
			isOpen: !isOpen,
		})
	}),

	withScriptjs,
	withGoogleMap
	)((props) =>
		<div style={{}}>
			<div className="d-none d-md-block" style={{position: 'absolute', top: '48px', width: '100%', height: '84px', paddingLeft:'15px', zIndex: '1', backgroundColor: '#f4f4f4'}}></div>

			<div className="d-none d-md-block" style={{position: 'absolute', top: '70px', width: '100%', height: '49px', paddingLeft:'15px', zIndex: '1', backgroundColor: '#f4f4f4'}}>
				<p style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '49px', margin: '0', float: 'left', fontSize: '26px', letterSpacing: '-0.63px', color: '#232323'}}>優惠列表</p>
				<div style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '49px', float: 'right', marginRight: '8px'}}  onClick={() => props.toggleMode()}>
					<img src="/static/right-on.svg" style={{width: '90px'}} />
				</div>
			</div>

			<GoogleMap
				defaultZoom={15}
				defaultCenter={{ lat: 24.986913, lng: 121.455948 }}
				options={{ mapTypeControl: false, streetViewControl: false, zoomControl: false, fullscreenControl: false }}
			>
				{props.shops.map((shop, index) => (
					<Marker
						key={index}
						position={{ lat: parseFloat(shop.lat), lng: parseFloat(shop.lon) }}
						onClick={() => {props.selectMarker(index); props.onToggleOpen(index)}}
					>
						{(props.isOpen && props.marker === index) && <InfoBox
							onCloseClick={props.onToggleOpen}
							options={{ closeBoxURL: ``, enableEventPropagation: true }}
						>
							<ul className="list-unstyled" style={{}}>
								<ShopItem onClick={() => {props.selectShop(props.marker); props.nextPage();}} content={props.shops[props.marker]} />
							</ul>
						</InfoBox>}
					</Marker>
				))}
			</GoogleMap>
							
			<div className="d-block d-md-none position-fixed" style={{right: '12px', bottom: '9px'}} onClick={() => props.toggleMode()}><img src="/static/right-on.svg" style={{width: '90px'}} /></div>
		</div>
	)



class ShopMap extends React.PureComponent {
	state = {
		isMarkerShown: false,
	}
/*
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
*/
	render() {
		return (
			<MyMapComponent
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
				
				shops = {this.props.shops}
				marker = {this.props.marker}
				selectMarker = {this.props.selectMarker}
				selectShop = {this.props.selectShop}
				nextPage = {this.props.nextPage}
				toggleMode = {this.props.toggleMode}
			/>
		)
	}
}


const mapStateToProps = state => ({
	shops: state.data,
	marker: state.data_now.index_marker,

})

const mapDispatchToProps = dispatch => ({

	selectMarker: index => dispatch(selectMarker(index)),
	selectShop: index => dispatch(selectShop(index)),
	nextPage: () => dispatch(nextPage()),
	toggleMode: () => dispatch(toggleMode())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopMap)