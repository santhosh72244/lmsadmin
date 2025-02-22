import React from 'react';
import { Line } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Sample data for the line chart
const chartData = [
  { name: 'Jan', users: 0 },
  { name: 'Feb', users: 0 },
  { name: 'Mar', users: 0 },
  { name: 'Apr', users: 0 },
  { name: 'May', users: 0 },
  { name: 'Jun', users: 0 },
  { name: 'Jul', users: 0 },
  { name: 'Aug', users: 0 },
  { name: 'Sep', users: 0 },
  { name: 'Oct', users: 0 },
  { name: 'Nov', users: 0 },
  { name: 'Dec', users: 0 }
];

const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">Dashboard</h4>
      
      {/* Stats Cards Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center p-4">
              <div className="text-center flex-grow-1">
                <h2 className="mb-0">20</h2>
                <p className="mb-0 text-primary">Total Users</p>
              </div>
              <div className="text-center flex-grow-1">
                <h2 className="mb-0">19</h2>
                <p className="mb-0 text-primary">Subscriptions</p>
              </div>
              <div className="text-center flex-grow-1">
                <h2 className="mb-0">16</h2>
                <p className="mb-0 text-primary">Total Courses</p>
              </div>
              <div className="text-center flex-grow-1">
                <h2 className="mb-0">11</h2>
                <p className="mb-0 text-primary">Templates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Stats and New Users Row */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span><span className="text-danger">•</span> Pending Users</span>
                  <span>1</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '5%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span><span className="text-danger">•</span> Pending Courses</span>
                  <span>5</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '31%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm text-white h-100 usercard">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="display-4 mb-0">0</h1>
                  <p className="mb-0">Users</p>
                </div>
                <div>
                  <button className="btn btn-outline-light">
                    <i className="bi bi-clipboard"></i>
                  </button>
                </div>
              </div>
              <p className="mb-0 mt-2">Today New Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Notification Row */}
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4">User Details Chart</h5>
              <div style={{ height: '300px' }}>
                <LineChart width={700} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#4f46e5" />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-3">Push Notification</h5>
              <p className="text-muted">Send Push Notification to all users</p>
              <textarea className="form-control mb-3" rows="6"></textarea>
              <button className="btn userbtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;