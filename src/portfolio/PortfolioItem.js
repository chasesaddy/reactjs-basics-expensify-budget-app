import React from 'react';

import { Link } from 'react-router-dom';

const PortfolioItemHome = () => (
  <div>
    <p>Go to any item:</p>
    <ul>
      <li>
        <Link to="/portfolio/items/322">Item One</Link>
      </li>
      <li>
        <Link to="/portfolio/items/456">Item Deux</Link>
      </li>
    </ul>
  </div>
);

const PortfolioItem = ( props ) => (
  <div>
    This is the item with id { props.match.params.id }.
  </div>
);

export { PortfolioItemHome, PortfolioItem };