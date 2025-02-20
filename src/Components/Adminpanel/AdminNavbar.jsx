import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ setIsCollapsed, isCollapsed }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setIsCollapsed(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.user-dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 fixed-top">
        <div className="container-fluid">
          <button
            className="hamburger-btn"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-icon ${!isCollapsed ? 'active' : ''}`}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>
          <Link className="navbar-brand" to="/dashboard">
            Dashboard
          </Link>
          <div className="ms-auto d-flex align-items-center">
            <div className="user-dropdown-container position-relative">
              <div 
                className="d-flex align-items-center cursor-pointer" 
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-person-circle me-2" style={{ fontSize: '24px' }}></i>
                <i className="bi bi-chevron-down" style={{ fontSize: '12px' }}></i>
              </div>
              {showDropdown && (
                <div className="position-absolute end-0 mt-2 py-2 bg-white rounded-lg shadow-lg" style={{ 
                  minWidth: '200px',
                  zIndex: 1000,
                  border: '1px solid #e5e7eb'
                }}>
                  <Link 
                    to="/edit-profile" 
                    className="dropdown-item px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Profile
                  </Link>
                  <Link 
                    to="/change-password" 
                    className="dropdown-item px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Change Password
                  </Link>
                  <Link 
                    to="/logout" 
                    className="dropdown-item px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isMobile && !isCollapsed && (
        <div className="sidebar-overlay" onClick={() => setIsCollapsed(true)} />
      )}
    </>
  );
};

export default AdminNavbar;