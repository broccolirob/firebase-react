import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { firestore } from '../firebase';
import { withRouter } from 'react-router-dom';

class AddPostForm extends Component {
  state = {
    title: this.props.title || '',
    url: this.props.url || '',
    text: this.props.text || '',
    channel: this.props.channel || '',
  };

  channelOptions = [
    { key: 1, text: 'NFL', value: 'NFL' },
    { key: 2, text: 'MLB', value: 'MLB' },
    { key: 3, text: 'NBA', value: 'NBA' },
    { key: 4, text: 'Premier League', value: 'EPL' },
    { key: 5, text: 'NHL', value: 'NHL' },
  ];

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, url, text, channel } = this.state;
    const { type, currentUser } = this.props;

    const article = {
      title,
      type,
      url,
      author: {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
      },
      voteCount: 1,
      commentCount: 0,
      active: true,
      rank: 0,
      channel: channel,
      createdAt: new Date(),
    };

    if (type === 'link') {
      article.url = url;
    } else {
      article.text = text;
    }

    try {
      firestore.collection('articles').add(article);
    } catch (error) {
      console.info(error);
    }
    this.props.history.goBack();
  };

  render() {
    const { title, url, text, channel } = this.state;
    const { type } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          label="League"
          name="channel"
          options={this.channelOptions}
          placeholder="Select a sports league"
          onChange={this.handleChange}
          value={channel}
        />
        <Form.Input
          label="Title"
          name="title"
          placeholder="Article title"
          onChange={this.handleChange}
          value={title}
        />
        {type === 'link' ? (
          <Form.Input
            label="Url"
            name="url"
            placeholder="Web address (e.g. http://www.site.com/123)"
            onChange={this.handleChange}
            value={url}
          />
        ) : (
          <Form.TextArea
            label="Text"
            name="text"
            placeholder="Article text (*optional)"
            onChange={this.handleChange}
            value={text}
          />
        )}
        <Form.Group>
          <Form.Button onClick={this.handleSubmit} primary>
            Submit
          </Form.Button>
          <Form.Button>Save Draft</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default withRouter(AddPostForm);
