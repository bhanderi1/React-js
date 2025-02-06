import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import { COUNTRY_DATA, COUNTRY_SET } from './Constant';

function* fetchCountryData() {
  try {
    let data = yield axios.get('http://192.168.1.12:8000/all_country/');
    
    data = yield data.json();
    console.log(data);
    console.log('Fetched Country Data:', data.data);

    // Dispatch the data to the reducer
    yield put({ type: COUNTRY_SET, data });
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}


// function* fetchRegisterData() {
//   try {
//     let data = yield fetch('https://srv597195.hstgr.cloud:8443/register');
//     data = yield data.json();
//     console.warn('Fetched Country Data:', data);

//     yield put({ type: REGISTER, data });
//   } catch (error) {
//     console.error('Error fetching country data:', error);
//   }
// }

function* ProductSaga() {
  yield takeEvery(COUNTRY_DATA, fetchCountryData);
  // yield takeEvery(REGISTER, fetchRegisterData);
}

export default ProductSaga;
