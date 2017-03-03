import * as actionTypes from '../../constants/types';
import {refetch} from '../../utils/refetch.js';


/**
 * [等待接单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getWatingOrders = (params) => {
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
		  method: 'get',
		  url : '/mock/waitingOrder.json',
		  success: function(data){
		  	let orderData;
		  	if(params.orderNo){
		  		data.data.orderData.map((item, i) => {
					if(item.orderNo == params.orderNo){
						orderData = item;
					}
				})
		  	}else{
		  		orderData = data.data.orderData;
		  	}
			dispatch({
				type:actionTypes.GET_MEMBER_WAITING_ORDERS_SUCCESS,
				waitingOrder: orderData
			})
		  },
		  fail: function(msg){
		  },
		  error: function(msg){
		  }
		})
	}
}

/**
 * [已接派单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getReceivingOrders = (params) =>{
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
			method: 'get',
			url: '/mock/receivingOrder.json',
			success: function(data){
				let orderData;
			  	if(params.orderNo){
			  		data.data.orderData.map((item, i) => {
						if(item.orderNo == params.orderNo){
							orderData = item;
						}
					})
			  	}else{
			  		orderData = data.data.orderData;
			  	}
				dispatch({
					type:actionTypes.GET_MEMBER_RECEIVING_ORDERS_SUCCESS,
					receivingOrder: orderData
				})
			},
			fail: function(msg){
			},
			error: function(msg){
		  	}
		})
	}
}

/**
 * [获取所有派单数据]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getAllOrders = (params) =>{
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
			method: 'get',
			url: '/mock/allOrder.json',
			success: function(data){
				dispatch({
					type:actionTypes.GET_MEMBER_ALL_ORDERS_SUCCESS,
					allOrder: data.data.orderData
				})
			},
			fail: function(msg){
			},
			error: function(msg){
		  	}
		})
	}
}


export const getAllPerson = (params) =>{
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
			method: 'get',
			url: '/mock/person.json',
			success: function(data){
				dispatch({
					type:actionTypes.GET_PERSON_SUCCESS,
					person: data.data.personData
				})
			},
			fail: function(msg){
			},
			error: function(msg){
		  	}
		})
	}
}

/**
 * [获取员工信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getEmployeeDesc = (params) =>{
	params = {
		...params
	}
	return (dispatch) => {
		return refetch({
			method: 'get',
			url: '/mock/employeeDesc.json',
			success: function(data){
				dispatch({
					type:actionTypes.GET_EMPLOYEEDESC_SUCCESS,
					employeeDesc: data.data.employeeData
				})
			},
			fail: function(msg){
			},
			error: function(msg){
		  	}
		})
	}
}

/**
 * [获取员工所在酒店的详情信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getEmployeeHotelDesc = (params) =>{
	params = {
		...params
	}
	
	return (dispatch, getState) => {
		let state = getState();
		let hotelDesc = state.employeeHotelDesc.employeeHotelDesc;
		if(hotelDesc){
			switch(params.type){
				case '部门':
					hotelDesc.employeeDepart = params.name;
					hotelDesc.hotelDesc.map((item,index) => {
						if(item.hotelDepart == params.name){
							hotelDesc.employeeJob = item.hotelJob[0].Job;
						}
					})
					break;
				case '职位':
					hotelDesc.employeeJob = params.name;
					break;
				case '负责区域':
					hotelDesc.employeeArea = params.name;
					break;
			}
			
			dispatch({
				type:actionTypes.GET_EMPLOYEEHOTELDESC_SUCCESS,
				employeeHotelDesc: hotelDesc
			})
		}else{
			return refetch({
				method: 'get',
				url: '/mock/employeeHotelDesc.json',
				success: function(data){
					dispatch({
						type:actionTypes.GET_EMPLOYEEHOTELDESC_SUCCESS,
						employeeHotelDesc: data.data.employeeHotelDesc
					})
				},
				fail: function(msg){
				},
				error: function(msg){
			  	}
			})
		}
	}
}

export const getFilterOrder = (id) =>{
	return (dispatch, getState) => {
		let order = getState();
		let oWaitingOrder = order.waitingOrder.waitingOrder,aWaitingOrder;
		oWaitingOrder.map((item, i) => {
			if(item.orderNo == id){
				aWaitingOrder = item;
			}
		})
		dispatch({
            type: actionTypes.GET_MEMBER_WAITING_ORDERS_FILTER_SUCCESS,
            waitingOrder: aWaitingOrder
        })
	}
}

export const getFilterReceiving = (id) =>{
	return (dispatch, getState) => {
		let order = getState();
		let oWaitingOrder = order.receivingOrder.receivingOrder,aWaitingOrder;
		oWaitingOrder.map((item, i) => {
			if(item.orderNo == id){
				aWaitingOrder = item;
			}
		})
    	dispatch({
            type: actionTypes.GET_MEMBER_RECEIVING_ORDERS_FILTER_SUCCESS,
            receivingOrder: aWaitingOrder
        })
	}
}