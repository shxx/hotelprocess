import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function waitingOrder(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_MEMBER_WAITING_ORDERS_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_MEMBER_WAITING_ORDERS_SUCCESS:
			return{
				 ...state,
                loading: false,
				waitingOrder: action.waitingOrder
			}
			//return Object.assign({}, state, {waitingOrder: action.waitingOrder,loading: false});
		case actionTypes.GET_MEMBER_WAITING_ORDERS_FILTER_SUCCESS:
			//return Object.assign({}, action.waitingOrder, {loading: false});
			return Object.assign({}, state,{
				waitingOrder:action.waitingOrder,
		        loading: false
		    });
		case actionTypes.GET_MEMBER_WAITING_ORDERS_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}