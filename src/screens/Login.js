import React from 'react';

import { MDBBtn } from "mdbreact";
import { FacebookLoginButton, LinkedInLoginButton, TwitterLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import '../App.css';

class Login extends React.Component {
  pressHandler = () => {
    this.props.navigation.navigate('Home',{
      itemId: 'Pradeep',
      otherParam: 'anything you want here',
    });
    //navigation.push('Home');
  }

  data = [
    {id:1, name:'Ford', color:'Red'},
    {id:2, name:'Hyundai', color:'Blue'}
  ]

  render() {
    return (

      <div class="card container" >

        <h5 class="card-header info-color white-text text-center py-4">
          <strong>Sign in</strong>
        </h5>

        <br />

        <div class="card-body px-lg-5 pt-0">


          <form class="text-center border border-light p-5" action="#!">


            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4 input" placeholder="E-mail" />


            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4 input" placeholder="Password" />

            <div class="d-flex justify-content-around center-block">
              <div>

                <div class="custom-control custom-checkbox ">
                  <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                  <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>

                <a href="">Forgot password?</a>
              </div>
            </div>


            <button class="SignInbtn btn-info btn-block my-4"
              onClick={() => this.pressHandler()}
              type="submit">Sign in</button>

            <p>Not a member?
              <a href="">Register</a>
            </p>

            <p>or sign in with: </p>

            <div className='rows'>
              <div className='row'>
                <FacebookLoginButton onClick={() => alert("Hello")} className='btnWith'>
                  <span></span>
                </FacebookLoginButton>
              </div>
              <div className='row'>
                <GoogleLoginButton onClick={() => alert("Hello")} className='btnWith'>
                  <span></span>
                </GoogleLoginButton>
              </div>
              <div className='row'>
                <TwitterLoginButton onClick={() => alert("Hello")} className='btnWith'>
                  <span></span>
                </TwitterLoginButton >
              </div>
              <div className='row'>
                <LinkedInLoginButton onClick={() => alert("Hello")} className='btnWith'>
                  <span></span>
                </LinkedInLoginButton  >
              </div>

            </div>

          </form>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<Login />);

export default Login;