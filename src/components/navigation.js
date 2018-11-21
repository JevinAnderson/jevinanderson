import React, { Component } from 'react';
import { Link } from 'gatsby';

class Navigation extends Component {
  state = {};

  // constructor(props) {}
  // componentWillMount(){} // will be deprecated
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {} // will be deprecated
  // static getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {} // will be deprecated
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  // componentWillUnmount() {}
  // componentDidCatch(error, info) {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Jevin Anderson
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navigation-controls"
          aria-controls="main-navigation-controls"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="main-navigation-controls">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/page-2">
                Page 2
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  static propTypes = {};

  static defaultProps = {};
}

export default Navigation;
