import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { contactInfo } from '../data/libraryData.js';

const initialForm = { fullName: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, e.g. name@example.com.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
    setSuccess('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Block submission while any field is invalid
    if (Object.keys(validationErrors).length > 0) {
      setSuccess('');
      return;
    }

    setSuccess(`Thanks, ${formData.fullName.trim()} — your message has been sent.`);
    setFormData(initialForm);
  }

  return (
    <section id="contact" className="section">
      <SectionTitle number="05" title="Contact Us" />

      <dl className="contact-details">
        <div>
          <dt>Address</dt>
          <dd>{contactInfo.address}</dd>
        </div>
        <div>
          <dt>Telephone</dt>
          <dd>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
          </dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </dd>
        </div>
      </dl>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <h3>Send us a message</h3>

        {success && (
          <p className="success" role="status">
            ✓ {success}
          </p>
        )}

        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="button">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
