import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Gator Trips</h1>
      <p className="mt-3">
        Effortless Travel Planning for Every Adventure
      </p>
      <Button href="/login" variant="primary" className="mt-4">
        Get Started
      </Button>
    </Container>
  );
}

export default home;