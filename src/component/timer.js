import React, { Component } from 'react';
import '../Assets/css/main.sass';


class Timer extends Component {
    static propTypes = {

    };

    constructor(props) {
      super(props);
      this.state = {
        deg: 0,
        r: 90,
        strokeDashoffset: 0,
      };
    }

    componentDidMount=() => {
      const { r } = this.state;
      const strokeDashoffset = 2 * r * Math.PI;
      this.setState({ strokeDashoffset });
    }

    setdeg = (e) => {
      const { r } = this.state;
      const percent = (e.target.value) * 0.01;
      const perimeter = 2 * r * Math.PI;
      const newStrokeDashoffset = perimeter * (1 - percent);

      this.setState({ deg: e.target.value, strokeDashoffset: newStrokeDashoffset });
    }


    render() {
      const { deg, r, strokeDashoffset } = this.state;

      return (
        <div className="circleProgress_wrapper">
          <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle id="circle" r={r} cx="100" cy="100" fill="transparent" strokeDasharray={2 * r * Math.PI} strokeDashoffset="0" />
            <circle
              id="bar"
              r={r}
              cx="100"
              cy="100"
              fill="transparent"
              strokeDasharray={2 * r * Math.PI}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90, 100, 100)"
            />
          </svg>
          <input value={deg} onChange={this.setdeg} />

        </div>
      );
    }
}

export default Timer;
