import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';

const EditBanner = () => {
  const [bannerType, setBannerType] = useState('web');
  const [file, setFile] = useState(null);
  const [currentImage, setCurrentImage] = useState('/path/to/banner-image.jpg');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container fluid className="p-4">
      <h2>Edit Banner</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Banner Name</Form.Label>
          <Form.Control type="text" defaultValue="Banner for Web" />
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
                checked={bannerType === 'web'}
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
                checked={bannerType === 'mobileApp'}
                onChange={() => setBannerType('mobileApp')}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Banner URL</Form.Label>
          <Form.Control type="text" defaultValue="https://anyurl.com/home" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Banner Image upload (1024 * 500)</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <div className="mb-3">
          <Image 
            src="/api/placeholder/200/100" 
            alt="Current banner" 
            thumbnail 
            style={{ maxWidth: '250px' }}
          />
        </div>

        <Button variant="success" type="submit" className="px-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditBanner;