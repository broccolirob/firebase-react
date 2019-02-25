import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { auth, facebookProvider, googleProvider } from '../firebase';

const SocialLogin = ({ history }) => {
  const signInWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(() => history.push('/'));
  };
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then(() => history.push('/'));
  };
  return (
    <React.Fragment>
      <Button color="facebook" onClick={signInWithFacebook} fluid>
        <Icon name="facebook" /> Facebook
      </Button>
      <br />
      <Button onClick={signInWithGoogle} fluid>
        <Icon name="google" /> Google
      </Button>
    </React.Fragment>
  );
};

export default SocialLogin;
