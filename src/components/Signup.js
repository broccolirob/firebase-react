import React, { Component } from 'react';
import {
  Form,
  Segment,
  Divider,
  Grid,
  Button,
  Checkbox,
  Message,
  Header,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import SocialLogin from './SocialLogin';

class Signup extends Component {
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
    this.setState({ submitting: true });

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      user.updateProfile({ displayName });
      this.props.history.push('/');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({
      displayName: '',
      email: '',
      password: '',
      submitting: false,
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      password,
      email,
      displayName,
      submitting,
      errorMessage,
    } = this.state;

    const { history } = this.props;

    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Header as="h4" attached="top" block>
              Join Scratch today
            </Header>
            <Segment attached>
              <Grid columns={2} relaxed="very">
                <Grid.Column verticalAlign="middle">
                  <SocialLogin history={history} />
                </Grid.Column>
                <Grid.Column>
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
                </Grid.Column>
              </Grid>
              <Divider vertical>Or</Divider>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(Signup);
