import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    cargoType: '',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    origin: '',
    destination: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('dimensions.')) {
      const dimField = name.split('.')[1];
      setFormData({
        ...formData,
        dimensions: {
          ...formData.dimensions,
          [dimField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.cargoType) newErrors.cargoType = 'Cargo type is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.dimensions.length) newErrors['dimensions.length'] = 'Length is required';
    if (!formData.dimensions.width) newErrors['dimensions.width'] = 'Width is required';
    if (!formData.dimensions.height) newErrors['dimensions.height'] = 'Height is required';
    if (!formData.origin) newErrors.origin = 'Origin is required';
    if (!formData.destination) newErrors.destination = 'Destination is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('');
        setFormData({
          cargoType: '',
          weight: '',
          dimensions: {
            length: '',
            width: '',
            height: ''
          },
          origin: '',
          destination: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          additionalInfo: ''
        });
        setErrors({});
      }, 3000);
    }
  };

  return (
    <div className="quote-page">
      <section className="quote-hero">
        <div className="container">
          <h1 className="page-title">Get a Quote</h1>
          <p className="page-subtitle">
            Fill out the form below and we'll provide you with a customized quote
          </p>
        </div>
      </section>

      <section className="quote-content">
        <div className="container">
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-section">
              <h2 className="form-section-title">Shipment Details</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cargoType">Cargo Type *</label>
                  <select
                    id="cargoType"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className={errors.cargoType ? 'error' : ''}
                  >
                    <option value="">Select cargo type</option>
                    <option value="general">General Freight</option>
                    <option value="fragile">Fragile Goods</option>
                    <option value="hazardous">Hazardous Materials</option>
                    <option value="refrigerated">Refrigerated</option>
                    <option value="oversized">Oversized Load</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.cargoType && <span className="error-message">{errors.cargoType}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Weight (lbs) *</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g., 5000"
                    className={errors.weight ? 'error' : ''}
                  />
                  {errors.weight && <span className="error-message">{errors.weight}</span>}
                </div>
              </div>

              <div className="form-row">
                <h3 className="dimensions-title">Dimensions (inches) *</h3>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="length">Length</label>
                  <input
                    type="number"
                    id="length"
                    name="dimensions.length"
                    value={formData.dimensions.length}
                    onChange={handleChange}
                    placeholder="Length"
                    className={errors['dimensions.length'] ? 'error' : ''}
                  />
                  {errors['dimensions.length'] && <span className="error-message">{errors['dimensions.length']}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="width">Width</label>
                  <input
                    type="number"
                    id="width"
                    name="dimensions.width"
                    value={formData.dimensions.width}
                    onChange={handleChange}
                    placeholder="Width"
                    className={errors['dimensions.width'] ? 'error' : ''}
                  />
                  {errors['dimensions.width'] && <span className="error-message">{errors['dimensions.width']}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="height">Height</label>
                  <input
                    type="number"
                    id="height"
                    name="dimensions.height"
                    value={formData.dimensions.height}
                    onChange={handleChange}
                    placeholder="Height"
                    className={errors['dimensions.height'] ? 'error' : ''}
                  />
                  {errors['dimensions.height'] && <span className="error-message">{errors['dimensions.height']}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="origin">Origin Address *</label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="City, State or Full Address"
                    className={errors.origin ? 'error' : ''}
                  />
                  {errors.origin && <span className="error-message">{errors.origin}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Destination Address *</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="City, State or Full Address"
                    className={errors.destination ? 'error' : ''}
                  />
                  {errors.destination && <span className="error-message">{errors.destination}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="form-section-title">Contact Information</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(215) 970 77-70"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="4"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any special requirements or notes..."
                ></textarea>
              </div>
            </div>

            {formStatus === 'success' && (
              <div className="form-success">
                Thank you! Your quote request has been submitted. We'll contact you within 24 hours.
              </div>
            )}

            <div className="form-submit">
              <button type="submit" className="submit-button">
                REQUEST QUOTE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;

