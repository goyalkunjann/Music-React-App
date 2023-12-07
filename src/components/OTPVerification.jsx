import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const OTPVerification = () => {

  const context = useContext(AuthContext);
  const { otp, setOtp } = context;

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
      };
    

    const handleInput = (index, e) => {
        const newValue = e.target.value;
    
        if (newValue.match(/^\d*$/) && newValue.length <= 1) {
          handleOtpChange(index, newValue);
          if (newValue !== '' && index < 3) {
            document.getElementById(`otp-input-${index + 1}`).focus();
          }
        }
      };

  return (
       <div className='flex justify-between'>
        {otp.map((value, index) => (
          <input
            type="text"
            key={index}
            value={value}
            onInput={(e) => handleInput(index, e)}
            id={`otp-input-${index}`}
            className='w-[78px] h-[77px] text-center border-solid outline-none border border-gray-900 bg-opacity-10 rounded-md text-2xl'
          />
        ))}
      </div>
  )
}

export default OTPVerification
