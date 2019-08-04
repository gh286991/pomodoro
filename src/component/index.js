import React, { Component } from 'react';
import Timer from './timer';
// import { ReactComponent as Play } from '../Assets/Play.svg';
import { ReactComponent as Drop } from '../Assets/drop.svg';
import Background from '../Assets/background.jpeg';
import '../Assets/css/main.sass';

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

class Index extends Component {
    static propTypes = {

    };

    constructor(props) {
      super(props);
      this.state = {
      };
    }


    render() {
      return (
        <div className="App">
          <div className="side"> 2019CHALLENGE.THEF2E.COM &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POMODORO </div>
          <div className="main" style={sectionStyle}>
            <div className="todoNow">
The things to do now
              <div className="drop"><Drop /></div>
            </div>
            <Timer />
            {/* <Play /> */}
          </div>
        </div>
      );
    }
}

export default Index;
