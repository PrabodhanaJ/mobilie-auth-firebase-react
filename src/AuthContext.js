import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    function setUpRecaptcha(number){
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }
    
    const AuthContext = () => {
        return (
            <AuthContext.provider value={{setUpRecaptcha}} >
                {children}
            </AuthContext.provider>
         );
    }
     
  
}


// export default AuthContext;


export function useAuthContext(){
    return useContext(AuthContext);
}



/* -------------------------------------------------------------------------------------------------------------------------- */


// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       console.log("SMS sent. Prompt user to type the code from the message");
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       console.log(error);
//     });