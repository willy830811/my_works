import React from 'react'

import { connect } from 'react-redux'
import CouponList from '../components/CouponList'

import { selectCoupon } from '../actions'


const mapStateToProps = state => ({
	coupons: state.data[state.data_now.index_shop].event
})

/*
const mapDispatchToProps = dispatch => ({
  toggleMode: id => dispatch(toggleTodo(id))
})
*/
const mapDispatchToProps = dispatch => ({
	selectCoupon: index => dispatch(selectCoupon(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CouponList)