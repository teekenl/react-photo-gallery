import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios.post('/register',{
      username: this.ref.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }).then(function(response){
      let result = response.data();
      if(result) {
        window.location.href = 'home';
      } else{
        // prompt the error message with the invalid form submit request.
      }
    }).catch(function(err){

    });
  }

  render(){
    return(
      <div>
        <form className="form">
          <input type="text" ref="username" placeholder="Email" />
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <input type="password" ref="confirm_password" placeholder="Password" />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Signup
