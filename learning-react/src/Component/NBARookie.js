import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Perform form submission logic here
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">NBA Rookie Test</h2>
      <form onSubmit={handleSubmit}>
        {[...Array(7)].map((_, index) => (
          <div className="form-group" key={index}>
            
            <input
              type="text"
              className="form-control"
              id={`field${index + 1}`}
              name={`field${index + 1}`}
              value={formData[`field${index + 1}`]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
