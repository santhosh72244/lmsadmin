import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LogoManagement = () => {
  const [files, setFiles] = useState({
    siteIcon: null,
    siteLiteLogo: null,
    siteDarkLogo: null
  });

  const handleFileChange = (e, logoType) => {
    setFiles({
      ...files,
      [logoType]: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container fluid className="p-4">
      <h2>Logo Management</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>Site Icon</Form.Label>
          <Form.Control 
            type="file" 
            onChange={(e) => handleFileChange(e, 'siteIcon')} 
          />
          <div className="bg-light p-3 mt-2" style={{ width: '100px', height: '100px' }}>
            <p className="text-muted">Logo here</p>
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Site Lite Logo</Form.Label>
          <Form.Text className="text-muted d-block mb-2">
            Note: it's using for Landing Page and Admin Side Menu
          </Form.Text>
          <Form.Control 
            type="file" 
            onChange={(e) => handleFileChange(e, 'siteLiteLogo')} 
          />
          <div className="bg-light p-3 mt-2" style={{ width: '100px', height: '100px' }}>
            <p className="text-muted">Logo here</p>
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Site Dark Logo</Form.Label>
          <Form.Text className="text-muted d-block mb-2">
            Note: it's using for Mail Template and Admin Login Page
          </Form.Text>
          <Form.Control 
            type="file" 
            onChange={(e) => handleFileChange(e, 'siteDarkLogo')} 
          />
          <div className="bg-light p-3 mt-2" style={{ width: '100px', height: '100px' }}>
            <p className="text-muted">Logo here</p>
          </div>
        </Form.Group>

        <Button variant="success" type="submit" className="px-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LogoManagement;