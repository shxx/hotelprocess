import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true
}

export default function filterOrder(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_MEMBER_WAITING_ORDERS_REQUEST: 
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_MEMBER_WAITING_ORDERS_FILTER_SUCCESS:
			return Object.assign({}, state, {id: action.id,loading: false});
		case actionTypes.GET_MEMBER_WAITING_ORDERS_FAILURE:
			return{
				 ...state,
                loading: false
			}
		default:
			return state;
	}
}