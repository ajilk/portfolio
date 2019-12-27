import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './pages/Main';

import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className='demo-big-content'>
          <Layout>
            <Header
              className='header-color'
              title={
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                  temur
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to='/About'>About</Link>
                <Link to='/Projects'>Projects</Link>
                <Link to='/Contact'>Contact</Link>
              </Navigation>
            </Header>
            <Drawer
              className='mdl-layout__drawer'
              Drawer
              title={
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                  temur
                </Link>
              }
            >
              <Navigation>
                <Link to='/About'>About</Link>

                <Link to='/Projects'>Projects</Link>
                <Link to='/Contact'>Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className='page-content' />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
