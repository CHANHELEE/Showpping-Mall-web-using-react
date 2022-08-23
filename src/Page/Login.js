import React from 'react'
import {Form,Button,Container} from 'react-bootstrap';
const Login = ({setAuthentication,authentication}) => {

  const loginUser = (event) =>{
    event.preventDefault();
    setAuthentication(!authentication);
  }


  return (
    <Container>
    
    <Form className="login-form" onSubmit={event=>loginUser(event)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required/>
    </Form.Group>
    <Button variant="danger" type="submit">
      로그인
    </Button>
  </Form>
  </Container>

  )
}

export default Login