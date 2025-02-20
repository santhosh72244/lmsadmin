import React from 'react';

const EditProfile = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-12">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title mb-4">Edit Admin Settings</h5>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="adminName" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    id="adminName"
                    placeholder="Admin Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    id="adminEmail"
                    placeholder="Admin Mail ID"
                  />
                </div>

                <button type="submit" className="btn btn-success px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;