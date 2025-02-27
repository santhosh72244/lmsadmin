import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css'

const AdminSidebar = ({ isCollapsed }) => {
  // Single state to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Function to handle menu clicks
  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className={`sidebar text-white ${isCollapsed ? '' : 'collapsed'}`}>
      <div className="sidebar-content h-100 d-flex flex-column">
        <div className="p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="bi bi-grid"></i>
                {!isCollapsed && 'Dashboard'}
              </Link>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('users')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-people"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Manage Users</span>
                        {openMenu === 'users' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'users' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/approved-users" className="nav-link sub-menu-link">
                        Manage User Details
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/pending-users" className="nav-link sub-menu-link">
                        Pending Users
                      </Link>
                    </li> */}
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('courses')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-book"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Manage Courses</span>
                        {openMenu === 'courses' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'courses' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/add-courses" className="nav-link sub-menu-link">
                        Add Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/approved-courses" className="nav-link sub-menu-link">
                        View Courses
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('subscriptions')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-collection"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Subscription</span>
                        {openMenu === 'orders' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'subscriptions' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/subscription" className="nav-link sub-menu-link">
                        List Subscription
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-subscription" className="nav-link sub-menu-link">
                        Add Subscription
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('template')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-file"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Template</span>
                        {openMenu === 'template' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'template' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/add-template" className="nav-link sub-menu-link">
                          Add Template
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

           

            {/* <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('promotions')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-tag"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Manage Promotions</span>
                        {openMenu === 'promotions' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'promotions' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/promotion-lists" className="nav-link sub-menu-link">
                        Promotion Lists
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-promotions" className="nav-link sub-menu-link">
                        Add Promotion
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/promotion-currency" className="nav-link sub-menu-link">
                        Promotion Currency
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li> */}

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('categories')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-card-list"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Categories</span>
                        {openMenu === 'categories' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'categories' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/parent-categories" className="nav-link sub-menu-link">
                        Parent Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sub-categories" className="nav-link sub-menu-link">
                        Sub Category
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/super-category" className="nav-link sub-menu-link">
                        Super Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/priority-category" className="nav-link sub-menu-link">
                        Priority Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/popular-category" className="nav-link sub-menu-link">
                        Popular Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-top-category" className="nav-link sub-menu-link">
                        Home Top Category
                      </Link>
                    </li> */}
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('orders')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-cart"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Manage Orders</span>
                        {openMenu === 'orders' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'orders' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/new-order" className="nav-link sub-menu-link">
                        Course New Orders
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('payments')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-wallet2"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Payments</span>
                        {openMenu === 'payments' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'payments' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/payment-settings" className="nav-link sub-menu-link">
                        Payment Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/view-payment" className="nav-link sub-menu-link">
                        View Payments
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>


            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('siteManagement')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-gear"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Settings</span>
                        {openMenu === 'siteManagement' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'siteManagement' && !isCollapsed && (
                  <ul className="nav flex-column">
                     <li className="nav-item">
                      <Link to="/default-settings" className="nav-link sub-menu-link">
                        Default Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/logo-management" className="nav-link sub-menu-link">
                        Logo Management
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div>
                <button
                  onClick={() => handleMenuClick('helpManagement')}
                  className="nav-link"
                >
                  <div className="d-flex align-items-center w-100">
                    <i className="bi bi-question-circle"></i>
                    {!isCollapsed && (
                      <>
                        <span className="menu-text">Help Management</span>
                        {openMenu === 'helpManagement' ? (
                          <ArrowDown className="arrow-icon" size={18} />
                        ) : (
                          <ArrowRight className="arrow-icon" size={18} />
                        )}
                      </>
                    )}
                  </div>
                </button>
                {openMenu === 'helpManagement' && !isCollapsed && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/manage-help-page" className="nav-link sub-menu-link">
                        Manage Help Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-help-page" className="nav-link sub-menu-link">
                        Add Help Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/edit-help-page" className="nav-link sub-menu-link">
                        Edit Help Page
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;