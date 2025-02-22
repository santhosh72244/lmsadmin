import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle password reset logic here
      console.log('Password reset submitted:', formData);
    }
  };

  return (
    <div className="container-fluid min-vh-100 adminback">
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card shadow-sm border-0 p-4">
            <div className="card-body">
              <h2 className="text-center mb-4">Reset Your Password</h2>
              <p className="text-center text-muted mb-4">
                Enter your new password below
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="password"
                    className={`form-control form-control-lg ${errors.newPassword ? 'is-invalid' : ''}`}
                    placeholder="New Password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.newPassword && (
                    <div className="invalid-feedback">{errors.newPassword}</div>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className={`form-control form-control-lg ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-lg mb-4"
                >
                  Reset Password
                </button>

                <div className="text-center">
                  <a href="/admin/login" className="text-primary text-decoration-none">
                    Back to Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;