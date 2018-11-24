import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './banner.scss';
import Map from './map';
import { setState } from '../../../../utils/redux';

class Banner extends Component {
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

  showMap = () => {
    setState({ mapVisible: true });
  };

  hideMap = () => {
    setState({ mapVisible: false });
  };

  render = () =>
    this.props.mapVisible ? (
      <Map hideMap={this.hideMap} />
    ) : (
      <section className="banner-map">
        <h4 className="col-12">Banner coming soon</h4>
        <button className="btn btn-outline-success" onClick={this.showMap}>
          Show Map
        </button>
      </section>
    );

  static propTypes = {
    mapVisible: PropTypes.bool
  };
}

export default connect(state => state)(Banner);
