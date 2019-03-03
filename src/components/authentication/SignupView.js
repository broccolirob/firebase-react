import React from 'react';
import { Segment, Divider, Grid, Header } from 'semantic-ui-react';
import SocialLogin from './SocialLogin';
import SignupForm from './SignupForm';

const SignupView = () => {
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
                <SocialLogin />
              </Grid.Column>
              <Grid.Column>
                <SignupForm />
              </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SignupView;
