import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';
import ManageUsers from './ManageUsers';
import './Adminpanel.css';
import AddCourses from './AddCourses';
import ViewCourses from './ViewCourses';

import MainCategories from './MainCategories';

import AddCategory from './AddCategory';
import EditMainCategory from './EditMainCategory';
import SubCategories from './SubCategories';
import AddSubCategory from './AddSubCategory';
import EditSubCategory from './EditSubCategory';
import CourseNewOrders from './CourseNewOrders';
import BannerManagement from './BannerManagement';
import AddBanner from './AddBanner';
import EditBanner from './EditBanner';
import LogoManagement from './LogoManagement';
import DefaultSettings from './DefaultSettings';
import PaymentSettings from './PaymentSettings';
import ManageHelpPage from './ManageHelpPage';
import EditHelpPage from './EditHelpPage';
import AddHelpPage from './AddHelpPage';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword'
import Subscriptions from './Subscriptions';
import AddSubscription from './AddSubscription';
import AddTemplate from './AddTemplate';
import ViewPayments from './ViewPayments';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 991);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="admin-layout">
      <AdminNavbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={`main-content ${isCollapsed ? 'expanded' : ''}`}>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* User management routes */}
          <Route path="/approved-users" element={<ManageUsers />} />
         
          <Route path="/add-courses" element={<AddCourses />} />

          <Route path="/approved-courses" element={<ViewCourses />} />

          <Route path="/main-category" element={<MainCategories />} />
          
          <Route path="/add-category" element={<AddCategory />} />

          <Route path="/edit-main-category" element={<EditMainCategory />} />

          <Route path="/sub-category" element={<SubCategories />} />

          <Route path="/add-sub-category" element={<AddSubCategory />} />

          <Route path="/edit-sub-category" element={<EditSubCategory />} />

          <Route path="/new-order" element={<CourseNewOrders />} />
          
          <Route path="/banner-management" element={<BannerManagement />} />

          <Route path="/add-banner" element={<AddBanner />} />

          <Route path="/edit-banner" element={<EditBanner />} />
          
          <Route path="/logo-management" element={<LogoManagement />} />

          <Route path="/default-settings" element={<DefaultSettings />} />

          <Route path="/payment-settings" element={<PaymentSettings />} />

          <Route path="/manage-help-page" element={<ManageHelpPage />} />

          <Route path="/add-help-page" element={<AddHelpPage />} />

          <Route path="/edit-help-page" element={<EditHelpPage />} />

          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/subscription" element={<Subscriptions />} />

          <Route path="/add-subscription" element={<AddSubscription />} />

          <Route path="/add-template" element={<AddTemplate />} />

          <Route path="/view-payment" element={<ViewPayments />} />

        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;