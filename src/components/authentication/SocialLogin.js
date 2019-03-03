import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { auth, facebookProvider, googleProvider } from '../../firebase';

const SocialLogin = ({ history }) => {
  const signInWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(() => history.push('/'));
  };
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then(() => history.push('/'));
  };
  return (
    <React.Fragment>
      <Button color="facebook" onClick={signInWithFacebook} size="large" fluid>
        <Icon name="facebook" /> Facebook
      </Button>
      <br />
      <Button onClick={signInWithGoogle} size="large" fluid>
        <Icon name="google" /> Google
      </Button>
      <br />
      <Button color="black" size="large" fluid>
        <Icon name="github" /> Github
      </Button>
      <br />
    </React.Fragment>
  );
};

export default withRouter(SocialLogin);
