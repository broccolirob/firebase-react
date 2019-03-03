import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import { signInWithPassword } from '../../firebase';

class LoginForm extends Component {
  state = { email: '', password: '', errorMessage: '', submitting: false };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    this.setState({ submitting: true });
    try {
      await signInWithPassword(email, password);
      history.goBack();
    } catch (error) {
      this.setState({
        errorMessage: error.message,
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
    const { email, password, errorMessage, submitting } = this.state;

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
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Form.Button type="submit" loading={submitting} primary>
          Log in
        </Form.Button>
      </Form>
    );
  }
}

export default withRouter(LoginForm);
