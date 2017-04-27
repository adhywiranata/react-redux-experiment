import React from 'react';

const styles = {
  header: {
    backgroundColor: '#446CB3',
    padding: 20,
    color: '#FFFFFF',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 0.3,
    fontSize: '2em',
  },
  nav: {
    flex: 0.4,
    float: 'right',
  },
  navMenu: {
    float: 'left',
    padding: '0px 10px',
    margin: '0px 20px',
    listStyleType: 'none',
    cursor: 'pointer',
  },
};

const Header = () => (
  <div style={styles.header}>
    <div style={styles.logo}>Logo Blog</div>
    <nav style={styles.nav}>
      <ul>
        { ['Users', 'Posts', 'login', 'logout'].map((menu, index) => (
          <li key={index} style={styles.navMenu}>{menu}</li>
        )) }
      </ul>
    </nav>
  </div>
);

export default Header;
