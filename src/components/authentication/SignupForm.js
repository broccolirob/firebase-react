import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';

class SignupForm extends Component {
  state = {
    errorMessage: '',
    password: '',
    email: '',
    displayName: '',
    submitting: false,
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, displayName } = this.state;
    const { history } = this.props;
    this.setState({ submitting: true });

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      history.goBack();
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        displayName: '',
        email: '',
        password: '',
        submitting: false,
      });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      displayName,
      password,
      errorMessage,
      submitting,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Screen Name"
            placeholder="Screen Name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Choose a Password"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button type="submit" loading={submitting} primary>
          Submit
        </Button>
      </Form>
    );
  }
}

export default withRouter(SignupForm);
