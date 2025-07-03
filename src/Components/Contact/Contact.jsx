import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    phone: '',
    alt: ''
  });

  const validateForm = () => {
    let errorMessages = [];

    if (!formData.name.trim()) errorMessages.push('Name is required.');
    if (!formData.age.trim()) {
      errorMessages.push('Age is required.');
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errorMessages.push('Age must be a positive number.');
    }
    if (!formData.profession.trim()) errorMessages.push('Profession is required.');
    if (!formData.phone.trim()) {
      errorMessages.push('Contact number is required.');
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errorMessages.push('Contact number must be 10 digits.');
    }
    if (!formData.alt.trim()) {
      errorMessages.push('Alternative number is required.');
    } else if (!/^\d{10}$/.test(formData.alt)) {
      errorMessages.push('Alternative number must be 10 digits.');
    }

    if (errorMessages.length > 0) {
      alert(errorMessages.join('\n'));
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const whatsapp = () => {
    if (!validateForm()) return;

    const { name, age, profession, phone, alt } = formData;

    const url =
      `https://wa.me/+918766539293?text=` +
      `*Name :* ${name}%0a` +
      `*Age :* ${age}%0a` +
      `*Profession :* ${profession}%0a` +
      `*Contact Number :* ${phone}%0a` +
      `*Alternative Number :* ${alt}`;

    window.open(url, '_blank').focus();
  };

  return (
    <div className="container" id="contact">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>

        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">
              CONTACT INFO : +91 87665 39293
            </div>
          </div>

          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <label>Full Name:</label>
                <input
                  className="app-form-control"
                  placeholder="Enter your name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="app-form-group">
                <label>Age:</label>
                <input
                  className="app-form-control"
                  type="number"
                  placeholder="Enter your age"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="app-form-group">
                <label>Profession:</label>
                <select
                  className="app-form-control"
                  id="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                >
                  <option value="">Select Profession</option>
                  <option value="Student">Student</option>
                  <option value="Businessman">Businessman</option>
                  <option value="Employee">Employee</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="app-form-group">
                <label>Contact Number:</label>
                <input
                  className="app-form-control"
                  placeholder="Enter your contact number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="app-form-group">
                <label>Alternative Number:</label>
                <input
                  className="app-form-control"
                  placeholder="Enter your alternative number"
                  id="alt"
                  value={formData.alt}
                  onChange={handleInputChange}
                />
              </div>

              <div className="app-form-group buttons">
                <button onClick={whatsapp}>Send via WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;