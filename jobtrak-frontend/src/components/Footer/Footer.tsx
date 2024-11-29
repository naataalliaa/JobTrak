import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>JobTrak</h2>
          <p>Job Application Tracker</p>
          <p>Manage your job search easily. Track applications, interview dates, and statuses in one organized place.</p>
        </div>
        <div className="footer-middle">
          <h3>Contact Us</h3>
          <p>Email: support@jobapplicationtracker.com</p>
          <p>Phone: (JobTrak) 123-#####</p>
          <p>Address: Baton Rouge, LA 70803</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/interview">Interview</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 JobTrak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
