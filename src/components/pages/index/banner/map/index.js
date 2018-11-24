import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
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

  render = () => (
    <div className="Banner-map">
      <br />
      <h4>Map coming soon...</h4>
      <button className="btn btn-outline-success" onClick={this.props.hideMap}>
        Hide Map
      </button>
    </div>
  );

  static propTypes = {
    hideMap: PropTypes.func
  };

  static defaultProps = {};
}

export default Map;
