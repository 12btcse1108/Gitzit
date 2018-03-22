import React from 'react'
import ReactDOM from 'react-dom';

const styles =  {
  searchbar:{
    marginTop: "10%"
  },
  repoContainer:{
    marginTop: "6%",
  },
  repoInfoBlock:{
    border: '1px solid #d1d5da',
    borderRadius: '3px',
    minHeight:'70px'
  },
  name:{
    color:"#0366d6",
    fontSize:'18px',
    fontWeight:'bold'
  },
  buttonBadge:{
    width:'90px'
  }
}

export default class UserInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'userList':'',
      'isViewUser':true,
      'repoUrl':'',
      'repoInformation':'',
      'avatar':''
    }
  }

  userRepo = (e) =>{
    e.preventDefault()
    let repoUrl = e.target.id;
    this.setState({'isViewUser':false});
    fetch(repoUrl)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      this.setState({'avatar':data[0].owner.avatar_url});
      const repoInfo = data.map((repoId)=>
          <div className="row" key={repoId.id}>
            <div className="col-xs-12 col-md-9" style={styles.repoInfoBlock}>
            <div className="row">
              <div className="col-xs-6 col-md-10"><h1 style={styles.name}>{repoId.name}</h1></div>
              <div className="col-xs-6 col-md-2">
                <button className="btn btn-warning" type="button" style={styles.buttonBadge}>
                  Star <span className="badge">{repoId.stargazers_count}</span>
                </button>
              </div>
            </div>
            <div>
              <h6>{repoId.description}</h6>
            </div>
          </div>
          </div>
      );
      this.setState({'repoInformation':repoInfo});
    })
  }

  searchUsers = (e) =>{
    e.preventDefault()
    let username = this.refs.user.value;
    const url = "https://api.github.com/search/users?q="
    fetch(url + username)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      const listitems = data.items.map((user)=>
        <li key={user.id} className="list-group-item">
        <div className = "container">
          <div className = "row">
            <div className="col-xs-6 col-md-4">
              <img src={user.avatar_url} height="100px" width="100px" alt="image" />
            </div>
            <div className="col-xs-10 col-md-8">
              <h1>{user.login}</h1>
              <div className = "row">
                <div className="col-xs-6 col-md-4">
                  <form target="_blank" action={user.html_url}>
                    <input type="submit" value="Github Link" className="btn btn-primary" />
                  </form>
              </div>
                <div className="col-xs-6 col-md-4">
                  <button type="button" className="btn btn-success" id = {user.repos_url} onClick = {this.userRepo}>View Repository</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </li>
      );
      this.setState({
        'userList':listitems
      })
    })
  }
  render(){
    return(
      <div>
      { this.state.isViewUser?
      <div style = {styles.searchbar}>
        <form className="form-horizontal">
          <div className="form-grolistItemsup">
            <label htmlFor="inputEmail3" className="col-sm-3 control-label">User Name</label>
            <div className="col-sm-6">
              <input type="email" className="form-control" ref="user" id="inputEmail3" placeholder="Enter the name of user" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-5 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={this.searchUsers}>Search</button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.userList}
        </ul>
        </div>
        :
        <div>
            <div className="container" style={styles.repoContainer}>
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <img src={this.state.avatar} height="230px" width="230px" alt="image" />
                </div>
                <div className="col-xs-12 col-md-9">
                  {this.state.repoInformation}
                </div>
              </div>
            </div>
      </div>
    }
      </div>
    );
  }
}
