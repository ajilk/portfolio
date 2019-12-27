import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div className='contact-body' style={{ overflow: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Hello, I am Temurbek Sabirov</h2>
        <Grid
          className='contact-grid'
          style={{
            overflow: 'auto',
            paddingTop: '0'
          }}
        >
          <Cell col={12}>
            <div style={{ display: 'block', textAlign: 'left' }}>
              <h1>About</h1>

              <p>
                My desire for learning new technology has been evolving ever
                since I was in elementary school. I used to experiement with
                random software I had on my Personal Computer. I did not know
                what the purpose of software I was using was but it did not stop
                me. I would tinker with the functionality until I got something
                that looked like work or until i broke or crashed the program.
                My brother would get angry at me everytime I crashed software
                like Photoshop or Sony Vegas. However, failing is a part of
                learning and as a result of failing in my early ages, I feel
                confident using software to do what I want, including
                video/photo editting or writing bits of code to create another
                software.
              </p>
            </div>
          </Cell>

          <Cell col={12}>
            <div style={{ display: 'block', textAlign: 'left' }}>
              <h1>Interests</h1>
              <h4>Personal Fitness</h4>
              <p>
                Wise men say: you need to take care of your mind as well as your
                body. By going to the gym and taking care of my diet, I
                compensate all the hours I spend by sitting in one place and
                coding. Personal fitness brings me peace and satisfaction
              </p>
              <h4>Photography</h4>
              <p>
                I love capturing beautiful moments in life. Pictures bring
                memories and good memories bring happiness. By taking pictures
                of the places I have visited, I keep and memories and feeling I
                felt when I was present in the setting
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
