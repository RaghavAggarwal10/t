import React from "react";
// import "ContactUs.css"; // Ensure to create this CSS file for styling

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">AAJ <span>swift</span></div>
        <ul>
          <li>Company</li>
          <li>Calculate Shipping Cost</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>
            <button className="track-btn">Track Shipment</button>
          </li>
          <li>
            <button className="login-btn">Login</button>
          </li>
        </ul>
      </nav>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Let’s Empower Your Supply Chain with Seamless and Reliable Logistics
            Solutions
          </p>
          <ul className="features">
            <li>
              <span className="icon">🚚</span> Get top-rated transporters at unbeatable
              prices
            </li>
            <li>
              <span className="icon">✅</span> 95% Guaranteed on-time Delivery
            </li>
            <li>
              <span className="icon">🔍</span> Live Shipment Tracking and timely updates
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h4>
            Fill the form and our sales representative will call you back
            within 24 hours
          </h4>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <select>
              <option>Contact Support</option>
              <option>Sales Inquiry</option>
              <option>Technical Support</option>
            </select>
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="partners-section">
        <h3>Logistics Partner for Exponential Growth</h3>
        <p>Trusted by top brands and small businesses alike</p>
        <div className="partner-logos">
          <img src="/logos/next_education.png" alt="Next Education" />
          <img src="/logos/khaitan.png" alt="Khaitan" />
          <img src="logos/talking_sox.png" alt="Talking Sox" />
          <img src="/logos/verde.png" alt="Verde" />
          <img src="/logos/synergy.png" alt="Synergy" />
          <img src="/logos/fruitnroot.png" alt="Fruitnroot" />
          <img src="/logos/tynor.png" alt="Tynor" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="logo">AAJ <span>swift</span></div>
        <p>Optimizing supply chains through warehousing and transportation services</p>
        <div className="social-icons">
          <span>👥</span>
          <span>📧</span>
          <span>👍</span>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
