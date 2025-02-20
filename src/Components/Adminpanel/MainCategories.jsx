import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainCategories = () => {
  const [categories] = useState([
    { id: 1, name: 'Office Productivity', priorityId: 10 },
    { id: 2, name: 'Business', priorityId: 9 },
    { id: 3, name: 'Photography & Video', priorityId: 8 },
    { id: 4, name: 'Lifestyle', priorityId: 7 },
    { id: 5, name: 'Development', priorityId: 1 },
    { id: 6, name: 'Design', priorityId: 2 },
    { id: 7, name: 'Personal Development', priorityId: 3 },
    { id: 8, name: 'Marketing', priorityId: 4 },
    { id: 9, name: 'Teaching & Academics', priorityId: 5 },
    { id: 10, name: 'Health & Fitness', priorityId: 6 }
  ]);
  const navigate = useNavigate()

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-3">Main Categories</h5>
          <button className="btn btn-primary mb-3" onClick={() => navigate(`/add-category`)}>Add Category</button>
          
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Categories"
            />
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className='table-light text-center'>
                <tr>
                  <th className='text-center'>#</th>
                  <th className='text-center'>Category name</th>
                  <th className='text-center'>Priority ID</th>
                  <th className='text-center'>Edit</th>
                  <th className='text-center'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className='text-center'>{category.id}</td>
                    <td className='text-center'>{category.name}</td>
                    <td className='text-center'>{category.priorityId}</td>
                    <td className='text-center'>
                      <button className="btn btn-primary" onClick={() => navigate(`/edit-main-category`)}>
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>
                    <td className='text-center'>
                      <button className="btn btn-primary">
                        <i className="bi bi-trash"></i>
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

export default MainCategories;