import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../assets/hallway-pic.jpg';
import Form from '../components/Forms';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body' style={{ overflow: 'auto' }}>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Temurbek Sabirov</h2>
            <img src={profilePic} alt='avatar' style={{ height: '250px' }} />
            <h3 style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Feel free to contact me by filling our the form to send me direct
              message on my email.
            </h3>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <Form />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
