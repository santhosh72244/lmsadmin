import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';

const DefaultSettings = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    siteDescription: '',
    contactMail: '',
    copyright: '',
    locationUrl: '',
    playstoreUrl: '',
    appstoreUrl: '',
    facebookUrl: '',
    XUrl: '',
    instagramUrl: '',
    LinkedinUrl: '',
    aboutUs: '',
    adminPhone: '',
    fcmKey: '',
    storageType: 'local' // default value
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Fetch existing settings on component mount
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get('/api/settings');
      setFormData(response.data);
    } catch (error) {
      showToastMessage('Failed to load settings', 'danger');
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/settings', formData);
      showToastMessage('Settings updated successfully');
    } catch (error) {
      showToastMessage('Failed to update settings', 'danger');
    }
  };

  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">Default Settings Management</h4>
      
      <form onSubmit={handleSubmit}>
        

        {/* Existing form fields with controlled inputs */}
        <div className="mb-3">
          <label htmlFor="siteName" className="form-label">Site Name</label>
          <input
            type="text"
            className="form-control"
            id="siteName"
            value={formData.siteName}
            onChange={handleInputChange}
            placeholder="Site Name"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="siteDescription" className="form-label">Site Description</label>
          <textarea
            className="form-control"
            id="siteDescription"
            rows="3"
            value={formData.siteDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="contactMail" className="form-label">Contact Mail ID</label>
          <input
            type="email"
            className="form-control"
            id="contactMail"
            value={formData.contactMail}
            onChange={handleInputChange}
            placeholder="Contact Email"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="copyright" className="form-label">Copyright Text</label>
          <input
            type="text"
            className="form-control"
            id="copyright"
            value={formData.copyright}
            onChange={handleInputChange}
            placeholder="Copyright"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="locationUrl" className="form-label">Location URL</label>
          <input
            type="url"
            className="form-control"
            id="locationUrl"
            value={formData.locationUrl}
            onChange={handleInputChange}
            placeholder="Location URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="playstoreUrl" className="form-label">Playstore URL</label>
          <input
            type="url"
            className="form-control"
            id="playstoreUrl"
            value={formData.playstoreUrl}
            onChange={handleInputChange}
            placeholder="Playstore URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="appstoreUrl" className="form-label">Appstore URL</label>
          <input
            type="url"
            className="form-control"
            id="appstoreUrl"
            value={formData.appstoreUrl}
            onChange={handleInputChange}
            placeholder="Appstore URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="facebookUrl" className="form-label">Facebook URL</label>
          <input
            type="url"
            className="form-control"
            id="facebookUrl"
            value={formData.facebookUrl}
            onChange={handleInputChange}
            placeholder="Facebook URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="XUrl" className="form-label">X URL</label>
          <input
            type="url"
            className="form-control"
            id="XUrl"
            value={formData.XUrl}
            onChange={handleInputChange}
            placeholder="X URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="instagramUrl" className="form-label">Instagram URL</label>
          <input
            type="url"
            className="form-control"
            id="instagramUrl"
            value={formData.instagramUrl}
            onChange={handleInputChange}
            placeholder="Instagram URL"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="LinkedinUrl" className="form-label">Linkedin URL</label>
          <input
            type="url"
            className="form-control"
            id="LinkedinUrl"
            value={formData.LinkedinUrl}
            onChange={handleInputChange}
            placeholder="Linkedin URL"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="aboutUs" className="form-label">About us</label>
          <textarea
            className="form-control"
            id="aboutUs"
            rows="3"
            value={formData.aboutUs}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="adminPhone" className="form-label">Admin Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="adminPhone"
            value={formData.adminPhone}
            onChange={handleInputChange}
            placeholder="Admin Phone Number"
          />
        </div>

        {/* Storage Type Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Storage Type</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="storageLocal"
              name="storageType"
              value="local"
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="storageLocal">
              Local Storage
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="storageS3"
              name="storageType"
              value="s3"
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="storageS3">
              S3 Storage
            </label>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="fcmKey" className="form-label">FCM Key</label>
          <textarea
            className="form-control"
            id="fcmKey"
            rows="3"
            value={formData.fcmKey}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      {/* Toast notifications */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg={toastType}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className={toastType === 'danger' ? 'text-white' : ''}>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default DefaultSettings;