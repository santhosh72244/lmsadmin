import React from 'react';

const DefaultSettings = () => {
  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">Default Settings Management</h4>
      
      <form>
        <div className="mb-3">
          <label htmlFor="siteName" className="form-label">Site Name</label>
          <input type="text" className="form-control" id="siteName" placeholder="Site Name" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="siteDescription" className="form-label">Site Description</label>
          <textarea className="form-control" id="siteDescription" rows="3"></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="contactMail" className="form-label">Contact Mail ID</label>
          <input type="email" className="form-control" id="contactMail" placeholder="Contact Email" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="copyright" className="form-label">Copyright Text</label>
          <input type="text" className="form-control" id="copyright" placeholder="Copyright" />
        </div>

        <div className="mb-3">
          <label htmlFor="locationUrl" className="form-label">Location URL</label>
          <input type="url" className="form-control" id="locationUrl" placeholder="Location URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="playstoreUrl" className="form-label">Playstore URL</label>
          <input type="url" className="form-control" id="playstoreUrl" placeholder="Playstore URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="appstoreUrl" className="form-label">Appstore URL</label>
          <input type="url" className="form-control" id="appstoreUrl" placeholder="Appstore URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="facebookUrl" className="form-label">Facebook URL</label>
          <input type="url" className="form-control" id="facebookUrl" placeholder="Facebook URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="XUrl" className="form-label">X URL</label>
          <input type="url" className="form-control" id="XUrl" placeholder="X URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="instagramUrl" className="form-label">Instagram URL</label>
          <input type="url" className="form-control" id="instagramUrl" placeholder="Instagram URL" />
        </div>

        <div className="mb-3">
          <label htmlFor="LinkedinUrl" className="form-label">Linkedin URL</label>
          <input type="url" className="form-control" id="LinkedinUrl" placeholder="Linkedin URL" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="aboutUs" className="form-label">About us</label>
          <textarea className="form-control" id="aboutUs" rows="3"></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="adminPhone" className="form-label">Admin Phone Number</label>
          <input type="tel" className="form-control" id="adminPhone" placeholder="Admin Phone Number" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="fcmKey" className="form-label">FCM Key</label>
          <textarea className="form-control" id="fcmKey" rows="3"></textarea>
        </div>
        
        
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default DefaultSettings;