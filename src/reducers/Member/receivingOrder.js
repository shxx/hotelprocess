import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function receivingOrder(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_MEMBER_RECEIVING_ORDERS_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_MEMBER_RECEIVING_ORDERS_SUCCESS:
			return{
				 ...state,
                loading: false,
				receivingOrder: action.receivingOrder
			}
			//return Object.assign({}, state, {receivingOrder: action.receivingOrder,loading: false});
		case actionTypes.GET_MEMBER_RECEIVING_ORDERS_FILTER_SUCCESS:
			//return Object.assign({}, action.receivingOrder, {loading: false});
			return Object.assign({}, state,{
				receivingOrder:action.receivingOrder,
		        loading: false
		    });
		case actionTypes.GET_MEMBER_RECEIVING_ORDERS_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}