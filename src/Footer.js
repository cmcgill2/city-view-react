import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">  
                  Company
              </li>
              <li className="footer__item">
                  Contact us
              </li>
              <li className="footer__item">
                  Careers
              </li>
              <li className="footer__item">
                  Privacy policy
              </li>
              <li className="footer__item">
                  Terms
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
             This site is part of a demo project by Chris McGillicuddy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
