import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsInvalid) {
      setEmailInvalid(true);
      return; //make sure the HTTP request won't occur
    }

    setEmailInvalid(false); // it passes the validation

    console.log('Sending HTTP request...'); //make sure the HTTP request accur
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email" >Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
