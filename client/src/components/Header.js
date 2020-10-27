import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import './Header.scss';

import AuthContext from '../contexts/AuthContexts';

const Header = () => {
  const contextType = AuthContext;
  const auth = useContext(contextType);

  const renderContent = (auth) => {

    if (auth === null) {
      return;
    } else if (auth.data) {
      return(
        <ul className="right">
          <li><a href="/stories">Stories</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/api/logout">Logout</a></li>
        </ul>
        );
    } else if (!auth.data) {
      return (
        <ul className="right">
          <li><a href="/auth/google">Login With Google</a></li>
        </ul>
      );
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={auth ? '/' : '/'}
          className="left brand-logo"
        >
          MyStories
        </Link>
          {renderContent(auth)}
      </div>
    </nav>
  );
}


export default Header;
