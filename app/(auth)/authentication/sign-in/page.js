'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const SignIn = () => {
  const hasMounted = useMounted();
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo.png" className="mb-2" alt="" /></Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form>
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control type="email" name="username" placeholder="Enter address here" required="" />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required="" />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit">Sign In</Button>
                  </div>
                  
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn