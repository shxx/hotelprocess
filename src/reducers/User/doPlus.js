import * as actionTypes from '../../constants/types';


export default function doPlus(state, action){
	let temp = state.itemAmount;
	temp[action.index] = temp[action.index]+1;
	const newstate = temp;
	switch(action.type){
		case actionTypes.DO_PLUS:
			return newstate;
		default:
			return state;
	}
}