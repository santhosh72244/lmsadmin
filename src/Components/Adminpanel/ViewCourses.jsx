import React, { useState } from 'react';

const ViewCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const coursesData = [
    { id: 1, name: 'Course name 1', price: 599 },
    { id: 2, name: 'Course name 2', price: 599 },
    { id: 3, name: 'Course name 3', price: 350 },
    { id: 4, name: 'Course name 4', price: 300 },
    { id: 5, name: 'Course name 5', price: 250 },
    { id: 6, name: 'Course name 6', price: 350 },
    { id: 7, name: 'Course name 7', price: 700 },
    { id: 8, name: 'Course name 8', price: 250 },
    { id: 9, name: 'Course name 9', price: 450 },
    { id: 10, name: 'Course name 10', price: 600 },
  ];

  return (
    <div className="container mt-4">
      <h4>Manage Approved Courses</h4>
      
      <div className="mb-4 d-flex justify-content-end">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ boxShadow: 'none' }}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className='table-light text-center'>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Course Name</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>Edit</th>
              <th className='text-center'>View</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course) => (
              <tr key={course.id}>
                <td className='text-center'>{course.id}</td>
                <td className='text-center'>{course.name}</td>
                <td className='text-center'>{course.price}</td>
                <td className='text-center'>
                  <button className="btn btn-primary">
                    <i className="bi-pencil"></i>
                  </button>
                </td>
                <td className='text-center'>
                  <button className="btn btn-primary">
                    <i className="bi-eye"></i>
                  </button>
                </td>
                <td className='text-center'>
                  <button className="btn btn-primary">
                  <i className="bi-x"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="d-flex justify-content-center">
        <ul className="pagination m-0">
          <li className="page-item">
            <button className="page-link border-primary" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    style={{ color: '#0d6efd' }}>
              &laquo;
            </button>
          </li>
          <li className="page-item">
            <button className="page-link border-primary bg-primary text-white">1</button>
          </li>
          <li className="page-item">
            <button className="page-link border-primary" style={{ color: '#0d6efd' }}>2</button>
          </li>
          <li className="page-item">
            <button className="page-link border-primary" 
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    style={{ color: '#0d6efd' }}>
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ViewCourses;