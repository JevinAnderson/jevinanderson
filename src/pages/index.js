import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Layout from '../components/layout';
import Image from '../components/image';
import { setState, withProvider } from '../utils/redux';

class IndexPage extends Component {
  buttonRef = createRef();

  componentDidMount() {
    setState({
      views: this.props.views + 1
    });
  }

  render = () => (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Page views: {this.props.views}</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">
        <button className="btn btn-success" ref={this.buttonRef}>
          Go to Page 2
        </button>
      </Link>
    </Layout>
  );

  static propTypes = {
    views: PropTypes.number
  };
}

const mapStateToProps = ({ views = 0 }) => ({ views });

export default compose(
  withProvider,
  connect(mapStateToProps)
)(IndexPage);
