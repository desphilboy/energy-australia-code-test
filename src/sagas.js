
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiError, apiSuccess, API_START } from './reducer';




function * apiCallSaga(action) {
	let response;
	try {
    	fetch('http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars',
			{
		        method: 'GET',
		        mode: "no-cors",
		        headers: {
		            'accept': 'application/json',
		        },
		    }
		).then(r => r.json().then(data => console.log(data)));

		response.json().then(function(data) {
        console.log(data);
      	});

		yield put(apiSuccess(data));
	} catch (error) {
		console.log('error:', error);
		yield put(apiError(error));
	}
}


export function *mainSaga() {
	yield takeLatest(API_START, apiCallSaga);
}