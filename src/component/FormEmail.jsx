import React from 'react'
import Form from 'react-bootstrap/Form';

const FormEmail = ({email, setEmail}) => {
  return (
    <div>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value= {email} placeholder="Enter email " 
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      
    </div>
  )
}

export default FormEmail