import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="row">
                    <div className="col-md-10">
                        <h1>Social Media Dashboard</h1>
                        <p>Total Subs</p>
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.props.showHideMiddle}>{this.props.middleButtonValue}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;