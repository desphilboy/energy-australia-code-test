import { createActions, handleActions, combineActions } from 'redux-actions';

const initialState = {
	data: false,
	error: false,
	inProgress: false,
};

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR'

export const { apiStart, apiSuccess, apiError } = createActions({
	API_START: () => ({ data: false, error: false, inProgress: true }),
	API_SUCCESS: data => ({ data, error: false, inProgress: false }),
	API_ERROR: error => ({ data: false, error, inProgress: false }),
});

export const reducer = handleActions(
	{ [combineActions(apiStart,apiSuccess,apiError)]: (state,action) => ({ ...state, ...action.payload }) },
	initialState,
)
