import React from 'react'

import { connect } from 'react-redux'
import CouponList from '../components/CouponList'

import { selectCoupon } from '../actions'
import { nextPage } from '../actions'

const mapStateToProps = state => ({
	shop: state.data[state.data_now.index_shop],
	coupons: state.data[state.data_now.index_shop].event
})

const mapDispatchToProps = dispatch => ({
	selectCoupon: index => dispatch(selectCoupon(index)),
	nextPage: () => dispatch(nextPage())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CouponList)