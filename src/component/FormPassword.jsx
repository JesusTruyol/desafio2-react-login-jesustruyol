import React from "react";
import Form from "react-bootstrap/Form";

const FormPassword = ({ setEnableButton, password, setPassword }) => {
  return (
    <div>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>{ 
              setPassword(e.target.value)
              e.target.value === "252525"? setEnableButton(false): setEnableButton(true)
            }}
          />
        </Form.Group>
      
    </div>
  );
};

export default FormPassword;
