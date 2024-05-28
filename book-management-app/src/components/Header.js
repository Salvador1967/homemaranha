import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>zap2 App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          lista de contatos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add contato 
        </NavLink>
      </div>
    </header>
  );
};

export default Header;