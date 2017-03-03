import * as actionTypes from '../../constants/types';
import {refetch} from '../../utils/refetch.js';

export const getItemList = (params) => {
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
			method: 'get',
			url: '/mock/itemList.json',
			success: function (data) {
				dispatch({
					type: actionTypes.GET_ITEM_LIST_SUCCESS,
					itemData: data.data.itemData
				})
			},
			fail: function (msg) {
			},
			error: function (msg) {
			}
		})
	}
}

export const setActiveOption = (index) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.SET_ACTIVE_OPTION,
			index: index
		})
	}
}
