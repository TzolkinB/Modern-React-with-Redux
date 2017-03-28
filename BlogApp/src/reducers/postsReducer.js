import FETCH_POSTS from '../actions/index';

const defaultState = {
	all: [],
	post:null
};

export default function(state = defaultState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {...state, all: action.payload.data }; 
		default: 
			return state;
	}
		//case FETCH_WEATHER: 
		// returns a new array with action.payload.data added into old state
			//return [ action.payload.data, ...state ];
}