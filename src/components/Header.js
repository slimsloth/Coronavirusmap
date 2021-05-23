import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p id="nav-title">California State University, Fullerton</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/VaccinationInfo">Vaccination Info</Link>
          </li>
          <li>
            <Link to="/page-2/">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
