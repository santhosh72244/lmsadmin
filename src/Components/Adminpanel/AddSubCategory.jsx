import React, { useState } from 'react';

const AddSubCategory = () => {
  const [formData, setFormData] = useState({
    subCategoryName: '',
    category: ''
  });

  // Sample categories - replace with your actual categories
  const categories = [
    { id: 1, name: 'Office Productivity' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Design' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <div className="row ">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Add Sub Category</h5>
              
              <form onSubmit={handleSubmit}>
                {/* Sub Category Name */}
                <div className="mb-3">
                  <label htmlFor="subCategoryName" className="form-label text-dark">
                    Sub Category Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subCategoryName"
                    name="subCategoryName"
                    value={formData.subCategoryName}
                    onChange={handleInputChange}
                    placeholder="Name"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="mb-4">
                  <label htmlFor="category" className="form-label text-dark">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-success px-4 py-2"
                  style={{ backgroundColor: '#00E676' }}
                >
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

export default AddSubCategory;