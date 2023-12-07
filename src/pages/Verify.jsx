import { useContext } from "react";
import OTPVerification from "../components/OTPVerification"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Verify = () => {

  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { number, onSubmitOtp } = context;

  const handleVerifyOtp = async () => {
    const status = await onSubmitOtp()
    if(status){
        navigate('/songs-dashboard'); 
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen mx-auto w-[400px]">
      <h2 className="font-roboto font-medium leading-[44.53px] text-primary text-4xl">
        OTP Verification
      </h2>
      <p className="font-roboto font-normal text-sm my-4">
        We have sent and OTP to +{number}. Please enter the code received to verify.
      </p>
      <OTPVerification />
      <button 
        className="bg-primary text-white font-roboto font-medium text-xl leading-[21.09px] text-center h-12 my-6 rounded-xl"
        onClick={handleVerifyOtp}>
        Verify
      </button>
      <div className="flex flex-col items-center gap-4">
        <p className="font-helvetica font-light text-base leading-4 cursor-pointer underline text-black-primary">
          Resend OTP
        </p>
        <p className="font-helvetica font-light text-base leading-4 cursor-pointer underline text-black-primary">
          Use another number
        </p>
      </div>
   </div>
  )
}

export default Verify
