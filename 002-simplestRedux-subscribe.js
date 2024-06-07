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

const unsubscribe = store.subscribe(() => {
	console.log('SUM', store.getState().sum);
});

store.dispatch(addNumberAction(4));
store.dispatch(addNumberAction(8));
unsubscribe();
store.dispatch(addNumberAction(12));

