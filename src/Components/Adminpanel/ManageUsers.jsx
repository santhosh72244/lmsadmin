import { PencilLine, Trash } from 'lucide-react';
import React, { useState } from 'react';
const ManageApprovedUsers = () => {
  const [users] = useState([
    { id: 1, username: 'lkd okjo', email: 'ruman.birteez@proton.me' },
    { id: 2, username: 'xPOT xPOT', email: 'potdevlab@gmail.com' },
    { id: 3, username: 'Testing19', email: 'deleted-348bd237-f425-4358-9cf6-c6f7b52651d9' },
    { id: 4, username: 'Testing18', email: 'deleted-f53b6115-7946-415c-a879-70f719004fc3' },
    { id: 5, username: 'Testing18', email: 'deleted-541f329d-b91d-423d-a864-11ffb62961b7' },
    { id: 6, username: 'Testing17', email: 'testing17@gmail.com' },
    { id: 7, username: 'Testing16', email: 'testing16@gmail.com' },
    { id: 8, username: 'Testing15', email: 'testing15@gmail.com' },
    { id: 9, username: 'Testing15', email: '' },
    { id: 10, username: 'Test user', email: 'tester@gmail.com' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleEdit = (id) => {
    console.log('Edit user with ID:', id);
  };
  const handleDisable = (id) => {
    console.log('Disable user with ID:', id);
  };
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container-fluid p-4">
      <div>
        <div>
          <h4 className="card-title mb-4">Manage Approved Users</h4>
          <div className="mb-4 d-flex justify-content-end">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ boxShadow: 'none' }}
        />
      </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light text-center">
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Username</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        style={{ width: '40px', padding: '4px' }}
                        onClick={() => handleEdit(user.id)}
                      >
                         <i className="bi-pencil"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleDisable(user.id)}
                      >
                          <i className="bi-x"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mt-4">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &laquo;
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(2)}
                >
                  2
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default ManageApprovedUsers;