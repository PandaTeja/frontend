import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import customerServiceImg from './customerServiceImg.jpg';

const App = () => {
  const [hours, setHours] = useState({
    regularHours: {
      mondayThursday: '8:00 AM - 7:45 PM ET',
      friday: '9:00 AM - 7:45 PM ET',
      weekend: '9:00 AM - 5:45 PM ET',
    },
    specialHours: [
      {
        date: '2024-12-25',
        hours: 'Closed',
      },
      {
        date: '2024-11-24',
        hours: '10:00 AM - 4:00 PM ET',
      },
    ],
  });

  const [newSpecialHour, setNewSpecialHour] = useState({
    date: '',
    hours: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpecialHour({
      ...newSpecialHour,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHours({
      ...hours,
      specialHours: [...hours.specialHours, newSpecialHour],
    });
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src={customerServiceImg}
          alt="Customer Service"
          className="header-img"
        />
        <h1 className="text-center">Customer Service Hours</h1>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <span className="online">
            <i className="fas fa-circle"></i>
          </span>
          <i className="fas fa-phone contact-icon"></i>
          <span>Call: 888-551-7600 • Available 8am</span>
        </div>
        <div className="contact-item">
          <span className="online">
            <i className="fas fa-circle"></i>
          </span>
          <i className="fas fa-sms contact-icon"></i>
          <span>Text: 888-551-7600 • Available 8am</span>
        </div>
        <div className="contact-item">
          <span className="online">
            <i className="fas fa-circle"></i>
          </span>
          <i className="fas fa-comments contact-icon"></i>
          <span>Live Chat • Available 8am</span>
        </div>
        <div className="contact-item">
          <span className="online">
            <i className="fas fa-circle"></i>
          </span>
          <i className="fas fa-envelope contact-icon"></i>
          <span>Email • Response by Sun</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Regular Hours</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Monday - Thursday:</strong>{' '}
              {hours.regularHours.mondayThursday}
            </li>
            <li className="list-group-item">
              <strong>Friday:</strong> {hours.regularHours.friday}
            </li>
            <li className="list-group-item">
              <strong>Weekend:</strong> {hours.regularHours.weekend}
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2>Special Hours</h2>
          <ul className="list-group">
            {hours.specialHours.map((specialHour, index) => (
              <li key={index} className="list-group-item">
                {specialHour.date}: {specialHour.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Add Special Hours</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Date:</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={newSpecialHour.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Hours:</label>
              <input
                type="text"
                name="hours"
                className="form-control"
                value={newSpecialHour.hours}
                onChange={handleChange}
                placeholder="e.g., 10:00 AM - 4:00 PM ET"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 SupplyHouse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
