// import { useNavigate } from 'react-router-dom';
import { put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { COUNTRY_CATEGORY_DATA, COUNTRY_DATA, COUNTRY_SET_DATA, COUNTRY_CATEGORY_SET_DATA, REGISTER, USER_REGISTER, LOGIN } from './Constant';

function* getCountryData() {
    let data = yield fetch('https://srv597195.hstgr.cloud:8443/all_country/')
    data = yield data.json()
    console.log("Fetched Country data saga", data);

    yield put({ type: COUNTRY_SET_DATA, data })
}


function* getCountryCategoryData() {

    let countryName = new URLSearchParams(location.search).get('country_name')
    console.log(countryName);

    let data = yield fetch(`https://srv597195.hstgr.cloud:8443/single_country_links/?country_name=${countryName}`)
    data = yield data.json()
    console.log("Fetched country category data saga ", data);

    yield put({ type: COUNTRY_CATEGORY_SET_DATA, data })
}


function* registerData(formdata) {
    // console.log("FormData data" ,JSON.stringify(formdata.data));
    // const navigate = useNavigate();
     let registerData = {
        user_firstname: formdata.data[0][1],
        user_lastname:formdata.data[1][1],
        user_email_id:formdata.data[2][1],
        user_password:formdata.data[3][1],
        user_confirm_password:formdata.data[4][1],
        mobile_no:formdata.data[5][1],
        address:formdata.data[6][1],
        pincode:formdata.data[7][1]
     }
     console.log(registerData);
     
    let data = yield axios.post('https://srv597195.hstgr.cloud:8443/register/',registerData ,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
        
    })
    // data = yield data.json()
    console.log("Fetching user register data saga", data);
    // if(data.status == 200){
    //     setInterval(()=>{
    //         navigate('/login')
    //     },3000)
    // }
    yield put({ type: USER_REGISTER, data })
}

function * loginData(formdata){
    let loginData = {
        email:formdata.data[0][1],
        password: formdata.data[1][1]
    }
    console.log(loginData);
    
    let data = yield axios.post('https://srv597195.hstgr.cloud:8443/login/',loginData ,{
        'Content-Type': 'application/json',
    })

    console.log(data);
}


// Service Code API----------------------------------------------------------

function* ProductSaga() {
    yield takeEvery(COUNTRY_DATA, getCountryData)
    yield takeEvery(COUNTRY_CATEGORY_DATA, getCountryCategoryData)

    // Service Code API------------------------------------------------------
    yield takeEvery(REGISTER, registerData)
    yield takeEvery(LOGIN, loginData)
}


export default ProductSaga