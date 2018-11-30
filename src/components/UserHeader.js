import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

  render() {
    const { user } = this.props
    if (!user) {
      return (<div> Loading... </div>);
    };
    return (<div className="header"> {user.name} </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  //Gets called with second argument called ownprops Props that are about to be 
  //injected in component replaces this.props* 
  return { user: state.users.find(user => user.id === ownProps.userId) }
};


export default connect(mapStateToProps)(UserHeader)

