import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="list-container">
          <p className="list-category">Features</p>
          <ul className="footer-list">
            <li className="footer-list-item">Learning Management</li>
            <li className="footer-list-item">Gamification Tools</li>
            <li className="footer-list-item">Deed Badges</li>
          </ul>
        </div>

        <div className="list-container">
          <p className="list-category">Pricing</p>
          <ul className="footer-list">
            <li className="footer-list-item">Free</li>
            <li className="footer-list-item">Individual Subscriptions</li>
            <li className="footer-list-item">School/University License</li>
            <li className="footer-list-item">Corporate Training Packages</li>
          </ul>
        </div>

        <div className="list-container">
          <p className="list-category">Partners</p>
          <ul className="footer-list">
            <li className="footer-list-item">Universities</li>
            <li className="footer-list-item">Corporate Organisations</li>
            <li className="footer-list-item">Government Organizations</li>
            <li className="footer-list-item">Student Bodies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
