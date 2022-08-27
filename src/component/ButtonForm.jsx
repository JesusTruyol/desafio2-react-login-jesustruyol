import React from 'react'
import { Button } from 'react-bootstrap';

const ButtonForm = ({enable}) => {
  return (
    <div>
      <Button type='submit' disabled={enable}>Enviar</Button>
    </div>
  )
}

export default ButtonForm