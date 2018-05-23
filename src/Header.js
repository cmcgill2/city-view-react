import React from "react";

const Header = props => {
  return (
    <div className="Header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">cities</span>
          <span className="heading-primary--sub">
            brought to you by our team
          </span>
        </h1>
        <a className="btn btn--white" onClick={props.click}>
          Fetch our cities!
        </a>
      </div>
    </div>
  );
};

export default Header;
