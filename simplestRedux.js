import { createStore } from 'redux';

const initialState = {
	sum: 0
};

const addReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_NUMBER':
			return {
				...state,
				sum: state.sum + action.payload
			};
		default:
			return state;
	}
}

const store = createStore(addReducer);

console.log('initial state:', store.getState());

const addNumberAction = (num) => ({
	type: 'ADD_NUMBER',
	payload: num
});

store.dispatch(addNumberAction(4));
console.log(222, store.getState());

store.dispatch(addNumberAction(8));
console.log(333, store.getState());

store.dispatch(addNumberAction(12));
console.log(444, store.getState());

