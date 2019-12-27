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
                I am a Computer Science student at Brooklyn College. Currently
                in my 3rd year pursuing a career in Software Engineering. My
                interest in technology started developing ever since I was a
                tiny kid. My brother and I shared a PC where he would install
                different photo/video editing software. Without having a single
                clue on how to use the software, I would tinker with it either
                until I ended up creating something or crashed it. My brother
                would get upset over me breaking his software. However, I saw
                this as an opportunity to learn something new. As a result of
                all the tinkering I did in the past, I find it easy to learn how
                to use new software that I have never seen before. Also, this
                fact can be applied to programming language, libraries, and
                frameworks. Since failing is considered as a part of learning,
                my failed attempts in the past led me to have such passion for
                technology.
              </p>
            </div>
          </Cell>

          <Cell col={12}>
            <div style={{ display: 'block', textAlign: 'left' }}>
              <h1>Interests</h1>
              <h4>Programming</h4>
              <p>
                The idea of creating something out of nothing thrills me.
                Programming gives me the skill and power to turn my dreams into
                reality. If I think of creating an application to track my
                calories, I can create it using various APIs and libraries. If I
                want to see how many times I check Instagram in a day, I can
                write an algorithm to record every time I go on Instagram. Some
                projects can be done alone and for some projects you need a team
                of good developers. Working in a team brings great benefits for
                each memeber because they will have a change to learn from one
                another. Although, it is not easy and takes a lot of effort and
                skill, possibilities are limitless.
              </p>
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
                memories and good memories bring happiness. By capturing
                beautiful places and moments in life, I keep memories and
                feeling I felt when I was present in the setting
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
