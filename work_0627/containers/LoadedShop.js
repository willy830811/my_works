import React from 'react'

import { connect } from 'react-redux'
import ShopList from '../components/ShopList'

import { selectShop } from '../actions'
import { nextPage } from '../actions'
import { toggleMode } from '../actions'


const mapStateToProps = state => ({
	shops: state.data
})


const mapDispatchToProps = dispatch => ({
	selectShop: index => dispatch(selectShop(index)),
	nextPage: () => dispatch(nextPage()),
	toggleMode: () => dispatch(toggleMode())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList)