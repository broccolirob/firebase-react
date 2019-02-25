import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Divider,
  Grid,
  Segment,
  Form,
  Header,
  Message,
} from 'semantic-ui-react';
import { signInWithPassword } from '../firebase';
import SocialLogin from './SocialLogin';

class Login extends Component {
  state = { email: '', password: '', errorMessage: '', submitting: false };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({ submitting: true });
    try {
      await signInWithPassword(email, password);
      this.props.history.push('/');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ email: '', password: '', submitting: false });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, errorMessage, submitting } = this.state;
    const { history } = this.props;

    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Header as="h4" attached="top" block>
              Log in to Scratch
            </Header>
            <Segment attached>
              <SocialLogin history={history} />
              <Divider horizontal>Or</Divider>
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
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(Login);
