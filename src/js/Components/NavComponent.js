import React from 'react'
import ReactDOM from 'react-dom';

export default class NavComponent extends React.Component{
  render(){
    return(
      <div className="container-fluid">
  			<div className="row">
  				<div className="col-md-12">
  					<nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
            <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Gitzit</a>
              </div>
              </div>
  					</nav>
  				</div>
  			</div>
  		</div>
    );
  }
}
