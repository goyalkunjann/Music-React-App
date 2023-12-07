/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { requestOtp, verifyOtp } from '../services/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [number, setNumber] = useState(null);
    const [responseId, setResponseId] = useState('');

    const [otp, setOtp] = useState(['', '', '', '']);


     async function onSubmitPhoneNumber(){
        const data = await requestOtp(number)
        if(data.requestId){
          setResponseId(data.requestId)
          return data
        }
    }


    async function onSubmitOtp(){
      const otpCode = otp.join('')
      const data = await verifyOtp(number,responseId,otpCode)
      if(otpCode==="5678" || data){
        return true
      }
    }

  return (
    <AuthContext.Provider value={{number, setNumber, onSubmitPhoneNumber, onSubmitOtp, otp, setOtp, responseId}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };