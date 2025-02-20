import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const AddBanner = () => {
  const [bannerType, setBannerType] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container fluid className="p-4">
      <h2>Add Banner</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Banner Name</Form.Label>
          <Form.Control type="text" placeholder="Banner Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Banner Type</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                id="web-radio"
                label="Web"
                name="bannerType"
                value="web"
                onChange={() => setBannerType('web')}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                id="mobile-app-radio"
                label="Mobile App"
                name="bannerType"
                value="mobileApp"
                onChange={() => setBannerType('mobileApp')}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Banner URL</Form.Label>
          <Form.Control type="text" placeholder="Banner URL" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Banner Image upload (1024 * 500)</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="success" type="submit" className="px-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddBanner;