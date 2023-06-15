import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.goal}!</p>
        <p>Message: {this.props.message}</p>
        <p>This is Home page</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goal: state.goal,
    message: state.message,
  };
};

const Home = connect(mapStateToProps)(HomePage);

export default Home;
