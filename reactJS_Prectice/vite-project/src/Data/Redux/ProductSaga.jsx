import { put, takeEvery } from 'redux-saga/effects';
import { COUNTRY_DATA, COUNTRY_SET } from './Constant';

function* fetchCountryData() {
  try {
    let data = yield fetch('https://srv597195.hstgr.cloud:8443/all_country/');
    data = yield data.json();
    console.warn('Fetched Country Data:', data);

    // Dispatch the data to the reducer
    yield put({ type: COUNTRY_SET, data });
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}

function* ProductSaga() {
  yield takeEvery(COUNTRY_DATA, fetchCountryData);
}

export default ProductSaga;
