import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>
      Portfolio
    </h1>

    <ul>
      <li>
        <NavLink to="/portfolio/" className="is-active" exact={ true }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio/items" className="is-active" exact={true}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio/contact" className="is-active" exact={true}>Contact</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
