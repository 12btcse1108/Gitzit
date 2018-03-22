import React from 'react'
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';
import UserInfo from './UserInfo';

export default class SearchUser extends React.Component{
  render(){
    return(
      <div>
        <NavComponent />
        <UserInfo />
      </div>
    );
  }
}
