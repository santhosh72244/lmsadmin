import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BannerManagement = () => {
const navigate = useNavigate()
  const [banners, setBanners] = useState([
    { id: 1, name: 'Banner for Web', type: 'web', url: 'https://anyurl.com/home' },
    { id: 2, name: 'New', type: 'app', url: 'https://anyurl.com/' },
    { id: 3, name: 'Banner', type: 'web', url: 'https://anyurl.com/' },
  ]);

  const handleOnClick = () =>{
    navigate('/add-banner')
}
const handleEditOnClick = () =>{
    navigate('/edit-banner')
}

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Deleting banner with id ${id}`);
  };

  return (
    <div className="container-fluid p-4">
        <div className="card-body">
          <h5 className="card-title">Banner Management</h5>
          <div className="mb-3">
            <button className="btn btn-primary mt-2" onClick={handleOnClick}>Add Banner</button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Banner Name</th>
                  <th>Banner Type</th>
                  <th>Banner URL</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {banners.map((banner) => (
                  <tr key={banner.id}>
                    <td>{banner.id}</td>
                    <td>{banner.name}</td>
                    <td>{banner.type}</td>
                    <td>{banner.url}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleEditOnClick}
                      >
                        <FaPencilAlt />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(banner.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default BannerManagement;