export const toggleMode = () => ({
	type: 'TOGGLE_MODE'
})

export const detectHeight = () => ({
	type: 'DETECT_HEIGHT',
	window_height
})

export const downloadData = raw_data => ({
	type: 'DOWNLOAD_DATA',
	raw_data
})

export const selectMarker = index => ({
	type: 'SELECT_MARKER',
	index
})

export const selectShop = index => ({
	type: 'SELECT_SHOP',
	index
})

export const selectCoupon = index => ({
	type: 'SELECT_COUPON',
	index
})

export const previousPage = () => ({
	type: 'PREVIOUS_PAGE'
})

export const nextPage = () => ({
	type: 'NEXT_PAGE'
})