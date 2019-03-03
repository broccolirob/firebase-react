import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndData } from '../utils';

export const ArticleContext = createContext({ articles: [] });

class ArticleProvider extends Component {
  state = {
    articles: [],
  };

  unsubscribeFromArticles = null;

  componentWillMount = async () => {
    this.unsubscribeFromArticles = firestore
      .collection('articles')
      .onSnapshot(snapshot => {
        const articles = snapshot.docs.map(collectIdsAndData);
        this.setState({ articles });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromArticles();
  };

  render() {
    const { articles } = this.state;
    const { children } = this.props;
    return (
      <ArticleContext.Provider value={articles}>
        {children}
      </ArticleContext.Provider>
    );
  }
}

export default ArticleProvider;
