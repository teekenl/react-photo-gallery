import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios.post('/verify',{
      email: this.refs.email.value,
      password: this.refs.password.value
    }).then(function(response){
        let result = response.data();
        if(result){
          window.location.href = 'home';
        } else{
          //prompt error message to inform user with wrong user and password
        }

    }).catch(function(err){
        console.log(err);
    });
  }

  render(){
    return(
      <div>
        <form className="form">
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}


export default Signin
