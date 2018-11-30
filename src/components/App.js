import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default connect(null)(App)
