import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ButtonForm from "./component/ButtonForm";
import FormEmail from "./component/FormEmail";
import FormPassword from "./component/FormPassword";



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [enableButton, setEnableButton] = useState(true);
  
  //Reset los input
  const resetInput = (e) => {
    e.preventDefault();
    alert('Password correcto')
    setEmail('')
    setPassword('')
   };

  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <form onSubmit={resetInput}>
            <h2>Login</h2>
            <FormEmail email={email} setEmail={setEmail}/>
            <FormPassword setEnableButton={setEnableButton} password={password} setPassword={setPassword}/>
            <ButtonForm enable={enableButton} />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
