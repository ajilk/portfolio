import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Forms extends Component {
  render() {
    return (
      <Form
        action='https://formspree.io/xwkvlvyr'
        method='POST'
        onSubmit={this.handleSubmit}
        style={{ width: '600px', textAlign: 'left' }}
      >
        <FormGroup>
          <Label for='name'>Name: </Label>
          <Input type='text' name='name' onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email: </Label>
          <Input type='text' name='email' onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for='message'>Message: </Label>
          <Input type='text' name='message' onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
export default Forms;
