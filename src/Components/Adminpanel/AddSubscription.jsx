import React, { useState } from 'react';

const AddSubscription = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    validity: '',
    description: '',
    tax: '',
    courses: {
      basic: false,
      intermediate: false,
      advanced: false
    },
    templates: {
      standard: false,
      premium: false,
      custom: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category, option) => {
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [option]: !prevState[category][option]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="row px-3">
      <div className="col-md-8">
        <div className="card-header">
          <h3 className="mb-0">Add Subscription</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mt-2 mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter subscription title"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="validity" className="form-label">Validity (in days)</label>
              <input
                type="number"
                className="form-control"
                id="validity"
                name="validity"
                value={formData.validity}
                onChange={handleInputChange}
                placeholder="Enter validity period"
                min="1"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                placeholder="Enter subscription description"
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="tax" className="form-label">Tax (%)</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="tax"
                  name="tax"
                  value={formData.tax}
                  onChange={handleInputChange}
                  placeholder="Enter tax percentage"
                  min="0"
                  max="100"
                  step="0.01"
                  required
                />
                <span className="input-group-text">%</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Add Courses</label>
              <div className="ms-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="basicCourse"
                    checked={formData.courses.basic}
                    onChange={() => handleCheckboxChange('courses', 'basic')}
                  />
                  <label className="form-check-label" htmlFor="basicCourse">Basic Course</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="intermediateCourse"
                    checked={formData.courses.intermediate}
                    onChange={() => handleCheckboxChange('courses', 'intermediate')}
                  />
                  <label className="form-check-label" htmlFor="intermediateCourse">Intermediate Course</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="advancedCourse"
                    checked={formData.courses.advanced}
                    onChange={() => handleCheckboxChange('courses', 'advanced')}
                  />
                  <label className="form-check-label" htmlFor="advancedCourse">Advanced Course</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Add Templates</label>
              <div className="ms-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="standardTemplate"
                    checked={formData.templates.standard}
                    onChange={() => handleCheckboxChange('templates', 'standard')}
                  />
                  <label className="form-check-label" htmlFor="standardTemplate">Standard Template</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="premiumTemplate"
                    checked={formData.templates.premium}
                    onChange={() => handleCheckboxChange('templates', 'premium')}
                  />
                  <label className="form-check-label" htmlFor="premiumTemplate">Premium Template</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customTemplate"
                    checked={formData.templates.custom}
                    onChange={() => handleCheckboxChange('templates', 'custom')}
                  />
                  <label className="form-check-label" htmlFor="customTemplate">Custom Template</label>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" className="btn btn-secondary me-md-2">Cancel</button>
              <button type="submit" className="btn btn-primary">Add Subscription</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubscription;