import React from "react";
import icon from "../../images/chatroom.png";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionTypes } from "../../StateProvider/reducer";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          className='login__image'
          src={icon}
          alt=''
        ></img>
        <h1>Sign In To Chat Room</h1>
        <p>https://github.com/Priom7</p>
        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
