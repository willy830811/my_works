import React from 'react'

import { connect } from 'react-redux'
import ShopList from '../components/ShopList'

import { selectShop } from '../actions'



const mapStateToProps = state => ({
	shops: state.data
})


const mapDispatchToProps = dispatch => ({
	selectShop: index => dispatch(selectShop(index))
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList)