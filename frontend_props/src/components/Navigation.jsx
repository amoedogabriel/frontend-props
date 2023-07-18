import React from 'react';

const Navigation = (props) => {
  const { storeTitle, loginLink, signupLink, productLinks } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">{storeTitle}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href={loginLink}>{props.loginText || 'Login'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={signupLink}>{props.signupText || 'Signup'}</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {productLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
