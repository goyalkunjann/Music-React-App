import { useContext } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const context = useContext(AuthContext);
  const { number, setNumber, onSubmitPhoneNumber } = context;
  const navigate = useNavigate();


  const handleLogin = async () => {
    const data = await onSubmitPhoneNumber()
    if(data){
      navigate('/otp-verify'); 
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen mx-auto w-[400px]">
      <h2 className="font-roboto font-medium leading-[44.53px] text-primary text-4xl">
        Sign In
      </h2>
      <p className="font-roboto font-normal text-sm my-4">
        Please enter your mobile number to login. We will send an OTP to verify your number.
      </p>
      <div className="items-center flex">
        <PhoneInput
            country={"in"}
            value={number}
            onChange={value=>setNumber(value)}
            placeholder="Phone number"
            className="w-full border-gray-900 bg-opacity-10 rounded-md h-9"
            inputProps={{
              name: 'phone',
              required: true,
            }}
            inputStyle={{ minWidth: "380px", minHeight:"40px" }}
            buttonStyle={{ backgroundColor: "white", minWidth: "40px", minHeight:"40px", paddingLeft: "10px",  borderRight: "none"}}
            />
      </div>
      <button 
        className="bg-primary text-white font-roboto font-medium text-xl leading-[21.09px] text-center h-12 my-6 rounded-xl"
        onClick={handleLogin}>
        Sign In
      </button>
    </div>
  )
}

export default Login
