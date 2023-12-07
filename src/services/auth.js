
const BASE_API =  'https://dev.api.goongoonalo.com/v1'


export const requestOtp = async (phoneNumber) => {

    try{
        const response = await fetch(`${BASE_API}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber: `+${phoneNumber}` }),
          });

          const data = await response.json();
          return data;
     
    }
    catch(error){
        console.log(error);
    }
};


export const verifyOtp = async (phoneNumber, responseId, code) => {

    try{
        const response = await fetch(`${BASE_API}/auth/verify_otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber: `+${phoneNumber}`, requestId: responseId, otp: code }),
          });

          const data = await response.json();
          return data;
     
    }
    catch(error){
        console.log(error);
    }
};