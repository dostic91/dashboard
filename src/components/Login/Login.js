import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePassChange = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div className="Login">
                <Link to="/">Dashboard</Link>
                <h1 className="text-center" style={{color:"white"}}>Welcome to Dashboard!</h1>
                <form autoComplete="off" className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}

export default Login;