import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import profilePic from '../assets/Profile_pic.png';

class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src={profilePic}
              className='avatar-img'
              alt='avatar'
              style={{
                marginTop: '50px',
                userSelect: 'none',
                border: '2px solid #151515',
                padding: '5px',
                width: '350px'
              }}
            />

            <div className='banner-text'>
              <h1>Computer Science Student</h1>
              <hr />
              <p>
                Java | JavaScript | HTML/CSS | React | NodeJS | ExpressJS |
                Flutter | Dart | Swift | SQL | MongoDB | Firebase
              </p>
              <div className='links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/temursabirov/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                </a>

                {/* Instagram */}
                <a
                  href='https://www.instagram.com/imtemurbek/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-instagram' aria-hidden='true'></i>
                </a>

                {/* Github */}
                <a
                  href='https://github.com/Temurbekk'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
