import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
  IconButton
} from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      // React Projects
      return (
        <div className='projects-grid'>
          {/*Project 1 */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://png.pngtree.com/svg/20170427/react_1353127.png) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Sorting Visualize</h4>
              <p>
                > This is a clone for a sorting visualizer by Clément Mihailescu{' '}
                <br />> Project's main functionality is to allow users to
                observe how sorting algorithms work on a given set of numbers.
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/Sorting-Visualize'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*Project 2 */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://png.pngtree.com/svg/20170427/react_1353127.png) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Porfolio Website</h4>
              <p>
                > This is my porfolio website where you are currently on. <br />
                > This responsive porfolio website is built using React, MDL,
                and CSS to provide pleasant UI/UX
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/portfolio'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      // JavaScript
      return (
        <div className='projects-grid'>
          {/*Library */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65bKDlrEMkG_tgaB81fM28fMDgd0nx7n7dr4PWjtUpsPidBtp&s) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Soluter</h4>
              <p>
                > This is my custom JavaScript Library to greet users in
                multiple languages <br />> This Project was built to further
                improve my knowledge of how JavaScript works under the hood
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/Soluter'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*100 Projects */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65bKDlrEMkG_tgaB81fM28fMDgd0nx7n7dr4PWjtUpsPidBtp&s) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>JS Projects</h4>
              <p>
                > A set of small JavaScript projects that I built on my spare
                time. <br />> These projects helped me learn a lot about how to
                connect HTML/CSS/JavaScript in one project
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/100-JS-projects'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      // Java
      return (
        <div className='projects-grid'>
          {/*Registrar's Database */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(data:image/png;base64,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) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Registrar's Database</h4>
              <p>
                > This project connects Java with PL/SQL using JDMS(Connector/J){' '}
                <br />> This project taught me a lot about SQL commands and how
                to structure queries. <br />> Also, this project helped me
                further enhance my Java skills and understand how JDMS works
                under the hood
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/Registrar-Database'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      // Swift Projects
      return (
        <div className='projects-grid'>
          {/*Simple Chat */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(data:image/png;base64,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) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Simple Chat</h4>
              <p>
                > This projects provides two or more people to send private
                messages to one chat room <br />> This project helped me further
                enhance Swift skills and taught me how to use Firebase to store
                users and messages sent
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/simple-chat'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*Tic-Tac-Toe */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(data:image/png;base64,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) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>Tic-Tac-Toe</h4>
              <p>
                > A Tic-Tac-Toe game for two players, X and O, who take turns
                marking the spaces in a 3×3 grid. The player who succeeds in
                placing three of their marks in a horizontal, vertical, or
                diagonal row is the winner. <br /> > This application can be
                played both on iOS mobile devices and iWatch
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/Temurbekk/TicTacToe'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      // Flutter Projects
      return (
        <div className='grid-projects'>
          {/*tracked */}
          <Card shadow={5} style={{ midwidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/flutter-512.png) center / cover'
              }}
            ></CardTitle>
            <CardText>
              <h4>tracked</h4>
              <p>
                > A mobile application that is suitable to user both in Android
                and iOS devices <br />> This project taught me a lot Flutter SDK
                and Firebase to achieve cross mobile platform compatibility as
                well as fast user authentication and data retrieval.
              </p>
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/ajilk/tracked'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Github</Button>
              </a>
              <a
                href='https://ajilk.com/tracked/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button colored>Website</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaSript</Tab>
          <Tab>Java</Tab>
          <Tab>Swift</Tab>
          <Tab>Flutter</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
