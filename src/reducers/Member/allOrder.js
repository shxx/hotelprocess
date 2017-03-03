import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function allOrder(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_MEMBER_ALL_ORDERS_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_MEMBER_ALL_ORDERS_SUCCESS:
			return{
				 ...state,
                loading: false,
				allOrder: action.allOrder
			}
			//return Object.assign({}, state, {allOrder: action.allOrder,loading: false});
		case actionTypes.GET_MEMBER_ALL_ORDERS_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}