import React from 'react'
import { connect } from 'react-redux'

import { getLocation } from '../action'


if (typeof navigator !== 'undefined') {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(res){
            lat = res.coords.latitude;
			lon = res.coords.longitude;
            (({lat: lat, lon: lon}) => this.props.getLocation)
			console.log(lat);
		}, function(error){
			console.log(error);
		});
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}



const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	getLocation: () => dispatch(getLocation())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GetLocation)
