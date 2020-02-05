import React from 'react';
import './sign-up.styles.scss';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const {displayName, email, password, confirmPassword} = this.state;
    // const {email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    signUpStart(email, password, displayName);

    // try{
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //
    //   await createUserProfileDocument(user, { displayName });
    //
    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   })
    // } catch(error) {
    //   console.log(error);
    // }

  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className='sign-up'>
         <h2 className='title'>I do not have an account</h2>
         <span>Sign up with your email and password</span>
         <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
               type='text'
               name='displayName'
               value={displayName}
               onChange={this.handleChange}
               label='Display Name'
               required
            />

            <FormInput
               type='text'
               name='email'
               value={email}
               onChange={this.handleChange}
               label='Email'
               required
            />

            <FormInput
               type='password'
               name='password'
               value={password}
               onChange={this.handleChange}
               label='Password'
               required
            />

            <FormInput
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               onChange={this.handleChange}
               label='Confirm Password'
               required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>

         </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
});

export default connect(null, mapDispatchToProps)(SignUp);
