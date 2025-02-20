import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  const [subscriptions] = useState([
    {
      id: 1,
      title: 'Basic Plan',
      price: 9.99,
      validity: '1 Month',
      description: 'Access to basic features and content',
      tax: 1.99
    },
    {
      id: 2,
      title: 'Pro Plan',
      price: 29.99,
      validity: '3 Months',
      description: 'Full access to all features with priority support',
      tax: 5.99
    },
    {
      id: 3,
      title: 'Enterprise Plan',
      price: 99.99,
      validity: '1 Year',
      description: 'Custom solutions for large organizations with dedicated support',
      tax: 19.99
    }
  ]);
  
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-3">Subscription Plans</h5>
          <button 
            className="btn btn-primary mb-3" 
            onClick={() => navigate('/add-subscription')}
          >
            Add Subscription
          </button>
          
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Subscriptions"
            />
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light text-center">
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Price ($)</th>
                  <th className="text-center">Validity</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Tax ($)</th>
                  <th className="text-center">Total ($)</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((subscription) => (
                  <tr key={subscription.id}>
                    <td className="text-center">{subscription.id}</td>
                    <td className="text-center">{subscription.title}</td>
                    <td className="text-center">${subscription.price.toFixed(2)}</td>
                    <td className="text-center">{subscription.validity}</td>
                    <td className="text-center">{subscription.description}</td>
                    <td className="text-center">${subscription.tax.toFixed(2)}</td>
                    <td className="text-center">
                      ${(subscription.price + subscription.tax).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button 
                        className="btn btn-primary"
                        onClick={() => navigate(`/edit-subscription/${subscription.id}`)}
                      >
                        <i className="bi-pencil"></i>
                      </button>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-danger">
                        <i className="bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;