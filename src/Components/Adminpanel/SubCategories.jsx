import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SubCategories = () => {
  const [categories] = useState([
    { id: 1, name: 'Web Development'},
    { id: 2, name: 'Mobile Development'},
    { id: 3, name: 'Web Design'},
    { id: 4, name: 'Design Tools'},
    { id: 5, name: 'Career Development'},
    { id: 6, name: 'Stress Management'},
    { id: 7, name: 'Digital Marketing'},
    { id: 8, name: 'SEO'},
    { id: 9, name: 'Language Learnings'},
    { id: 10, name: 'Math'}
  ]);
  const navigate = useNavigate()

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-3">Sub Categories</h5>
          <button className="btn btn-primary mb-3" onClick={() => navigate(`/add-sub-category`)}>Add Sub Category</button>
          
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
                  <th className='text-center'>Sub Category name</th>
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
                      <button className="btn btn-primary" onClick={() => navigate(`/edit-sub-category`)}>
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

export default SubCategories;