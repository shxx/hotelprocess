import * as actionTypes from '../../constants/types';

const initialState = {
	loading: true,
	activeOption: 0
}

export default function itemList(state = initialState, action){
	switch(action.type){
		case actionTypes.GET_ITEM_LIST_REQUEST:
			return{
				...state,
				loading: false
			}
		case actionTypes.GET_ITEM_LIST_SUCCESS:
			return Object.assign({}, state, {itemData: action.itemData,loading: false});
		case actionTypes.GET_ITEM_LIST_FAILURE:
			return{
				 ...state,
                loading: false
			}
		case actionTypes.SET_ACTIVE_OPTION:
			return{
				...state,
				activeOption: action.index
			}
		default:
			return state;
	}
}