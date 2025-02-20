import React, { useState } from 'react';

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!passwordData.oldPassword) {
      newErrors.oldPassword = 'Old password is required';
    }
    
    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
    }
    
    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Password change submitted:', passwordData);
      // Add your password change logic here
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h5>Change Password</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Old Password</label>
              <input
                type="password"
                className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handleChange}
                placeholder="Old Password"
              />
              {errors.oldPassword && (
                <div className="invalid-feedback">{errors.oldPassword}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
              />
              {errors.newPassword && (
                <div className="invalid-feedback">{errors.newPassword}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;