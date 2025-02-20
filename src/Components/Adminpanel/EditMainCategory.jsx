import React, { useState } from 'react';
import editpageimg from '../../Assets/edit-main-category.png'

const EditMainCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    image: null,
    setPopular: false,
    setHomePageTop: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : 
              value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Add Main Category</h5>
              
              <form onSubmit={handleSubmit}>
                {/* Category Name */}
                <div className="mb-3">
                  <label htmlFor="categoryName" className="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image upload(jpg, png, jpeg)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Icon Preview */}
                <div className="mb-4">
                  <img 
                    src= {editpageimg}
                    alt="Category Icon"
                    className="img-fluid"
                    style={{ maxWidth: '64px' }}
                  />
                </div>



                {/* Set Popular Checkbox */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="setPopular"
                      name="setPopular"
                      checked={formData.setPopular}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="setPopular">
                      Set Popular
                    </label>
                  </div>
                </div>

                {/* Set Home Page Top Checkbox */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="setHomePageTop"
                      name="setHomePageTop"
                      checked={formData.setHomePageTop}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="setHomePageTop">
                      Set Home Page Top
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success">
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

export default EditMainCategory;