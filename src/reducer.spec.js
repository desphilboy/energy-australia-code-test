import { reducer, apiStart, apiError, apiSuccess } from './reducer';

describe('reducer', () => {
	let testState;
	beforeEach(() => {
		testState = {
			data: false,
			error: false,
			inProgress: false,
		};
	});

	test('start action makes inProgress true', () => {
		expect(reducer(testState, apiStart())).toEqual({
			data: false,
			error: false,
			inProgress: true,
		});
	});

	test('success action makes inProgress false and ', () => {
		testState.inProgress = true;
		expect(reducer(testState, apiSuccess('someTestData'))).toEqual({
			data: 'someTestData',
			error: false,
			inProgress: false,
		});
	});

	test('error action makes inProgress false and ', () => {
		testState.inProgress = true;
		expect(reducer(testState, apiError('someTestError'))).toEqual({
			data: false,
			error: 'someTestError',
			inProgress: false,
		});
	});
});
