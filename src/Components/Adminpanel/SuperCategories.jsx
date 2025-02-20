import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SuperCategories = () => {
  const [categories] = useState([
    { id: 1, name: 'Recat JS'},
    { id: 2, name: 'Angular'},
    { id: 3, name: 'Android Development'},
    { id: 4, name: 'IOS Development'},
    { id: 5, name: 'Wordpress'},
    { id: 6, name: 'Figma'},
    { id: 7, name: 'Photoshop'},
    { id: 8, name: 'Adobe Illustrator'},
    { id: 9, name: 'Interview Skills'},
    { id: 10, name: 'Business Communication'}
  ]);
  const navigate = useNavigate()

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-3">Super Categories</h5>
          <button className="btn btn-primary mb-3" onClick={() => navigate(`/add-super-category`)}>Add Super Category</button>
          
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
                  <th className='text-center'>Super Category name</th>
                  <th className='text-center'>Edit</th>
                  <th className='text-center'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className='text-center'>{category.id}</td>
                    <td className='text-center'>{category.name}</td>
                    <td className='text-center'>
                      <button className="btn btn-primary" onClick={() => navigate(`/edit-super-category`)}>
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

export default SuperCategories;