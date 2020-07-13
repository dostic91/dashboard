import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Dashboard/Header/Header';
import Middle from './components/Dashboard/Middle/Middle';
import Bottom from './components/Dashboard/Bottom/Bottom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      middle: true,
      middleButtonValue: "Hide",
      bigCompList: [
        {
          name: "facebook",
          number: 1987,
          today: 92,
          class: "blue"
        },
        {
          name: "twitter",
          number: 1044,
          today: 99,
          class: "green"
        },
        {
          name: "instagram",
          number: 1146,
          today: 1000,
          class: "orange"
        },
        {
          name: "reddit",
          number: 8239,
          today: 144,
          class: "red"
        }
      ]
    }
  }

  toggleMiddle = () => {
    if (this.state.middle == true) {
      this.setState({ middle: !this.state.middle, middleButtonValue: "Show" });
    } else {
      this.setState({ middle: !this.state.middle, middleButtonValue: "Hide" });
    }
  }

  render() {

    let middleContent;
    if (this.state.middle == true) {
      middleContent = <Middle list={this.state.bigCompList} />;
    } else {
      middleContent = null;
    }

    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Header middleButtonValue={this.state.middleButtonValue} showHideMiddle={this.toggleMiddle} />
            {middleContent}
            <Bottom />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
