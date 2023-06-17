import { useState } from "react";
import { useAuthContext } from "./AuthContext";
// import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const { setUpRecaptcha } = useAuthContext();
    // const { setUpRecaptcha } = AuthContext();
    const [otp, setOtp] = useState('');
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    const getOtp = async () => {
        if (phoneNumber === undefined || phoneNumber === '') {
            alert('Please enter phone number');
            return;
        }
        try {
            const respone = await setUpRecaptcha(phoneNumber);
            console.log(respone);
            setResult(respone);
        } catch (e) {
            console.log(e);
        }
        console.log('number', phoneNumber);
    }

    const verifyOtp =  async (e) => {
        e.preventDefault();
        console.log('otp', otp);
        if (otp === undefined || otp === '') {
            alert('Please enter OTP');
            return;
        }
        try {
            await result.confirm(otp);
            toast.success("Otp confirmed");
            navigate('/home');
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="form" onSubmit={getOtp}>
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <input
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        placeholder="Enter phone number"
                    />
                    <div id="recaptcha-container" />
                    <div className="">
                        <button className="btn btn-primary" type="submit">send OTP</button>
                    </div>
                </form>

                <form className="form" onSubmit={verifyOtp}>
                    <div className="card-header">
                        <h1>OTP</h1>
                    </div>
                    <input
                        type="otp"
                        placeholder="Enter OTP"
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className="">
                        <button className="btn btn-primary" type="submit">verify</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;