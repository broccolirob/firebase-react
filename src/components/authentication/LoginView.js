import React from 'react';
import { Divider, Grid, Segment, Header } from 'semantic-ui-react';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';

const LoginView = () => {
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Header as="h4" attached="top" block>
            Log in to Scratch
          </Header>
          <Segment attached>
            <SocialLogin />
            <Divider horizontal>Or</Divider>
            <LoginForm />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginView;
