import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER: 
		// returns a new array with action.payload.data added into old state
			return [ action.payload.data, ...state ];
	}
	return state;
}