import React, { useEffect, useState } from 'react'
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';


const Register = () => {

    // const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setzipCode] = useState("");
    const [mobile, setMobile] = useState("");
    const [cPassword, setCPassword] = useState("");

    // console.log({ firstname, lastname, email, password, cPassword, address, zipcode, mobile });

    const handelSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("user_firstname", firstname);
        formdata.append("user_lastname", lastname);
        formdata.append("user_email_id", email);
        formdata.append("user_password", password);
        formdata.append("user_confirm_password", cPassword);
        formdata.append("mobile_no", mobile);
        formdata.append("address", address);
        formdata.append("pincode", zipcode);
        console.log([...formdata]);

        try {
            const response = await axios.post('http://192.168.1.10:8000/register/', formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log("Form Data successfully", response);
            // console.log("response", response.status);
            if (response.status == 200) {
                setEmail("");
                setFirstname("");
                setLastname("")
                setCPassword("");
                setMobile("");
                setpassword("");
                setzipCode("");
                const message = JSON.parse(JSON.stringify(response.data.message))
                // toast.success(message, {
                //     position: "top-center",
                //     autoClose: 3000,
                // })

                // setInterval(() => {
                //     navigate('/login')
                // }, 3000)
            }
            console.log(response);
        }
        catch (err) {
            console.log(err)
            const message = JSON.parse(JSON.stringify(err.response.data.message))
            // toast.error(message, {
            //     position: "top-center",
            //     autoClose: 3000,
            // })
        }
    }
    return (
        <>
            <div>
                <h1>Register page</h1>
                <form onSubmit={handelSubmit} id='form'>
                    {/* <ToastContainer /> */}
                    <div>
                        <div>
                            <label htmlFor="">FirstName</label>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} name='firstname' required />
                        </div>
                        <div>
                            <label htmlFor="">LastName</label>
                            <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} name='lastname' required />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name='email' required />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="text" onChange={(e) => setpassword(e.target.value)} value={password} name='password' required />
                        </div>
                        <div>
                            <label htmlFor="">Confirme Password</label>
                            <input type="text" onChange={(e) => setCPassword(e.target.value)} value={cPassword} name='cPassword' required />
                        </div>
                        <div>
                            <label htmlFor="">Mobile no</label>
                            <input type="number" onChange={(e) => setMobile(e.target.value)} value={mobile} name='mobile' required />
                        </div>
                        <div>
                            <label htmlFor="">Zipcode</label>
                            <input type="text" onChange={(e) => setzipCode(e.target.value)} value={zipcode} name='zipcode' required />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} name='address' required />
                        </div>
                    </div>

                    <button type='submit'>Submit</button>

                    {/* <div className='message'>{message ? <p> {message}</p> : null}</div> */}
                </form>
            </div>
        </>
    )
}

export default Register