import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/cinema-logo.svg';

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const HEADERLIST = [
    {
      id: 1,
      iconClass: 'fas fa-film',
      name: 'Now Playing',
      type: 'now_playing'
    },
    {
      id: 2,
      iconClass: 'fas fa-fire',
      name: 'Popular',
      type: 'popular'
    },
    {
      id: 3,
      iconClass: 'fas fa-star',
      name: 'Top Rated',
      type: 'top_rated'
    },
    {
      id: 4,
      iconClass: 'fas fa-square',
      name: 'Upcoming',
      type: 'upcoming'
    }
  ];

  const toggleMenu = () => {
    navClass = !navClass;
    menuClass = !menuClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
      <div className="header-image">
        <img alt="" src={logo} />
      </div>

      <div className={ `${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}` }
        id="header-mobile-menu"
        onClick={() => toggleMenu()}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
        {
          HEADERLIST.map((item) =>
            <li className="header-nav-item"
              key={item.id}
            >
              <span className="header-list-name">
                <i className={item.iconClass}></i>
              </span>
              &nbsp;
              <span className="header-list-name">{item.name}</span>
            </li>
          )
        }
        <input
          className="search-input"
          type="text"
          placeholder="Search for Movie"
        />
      </ul>
      </div>
    </div>
  );
};

export default Header;
