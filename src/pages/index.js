import React, { Component, createRef } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import waitForGlobal from '../utils/wait-for-global';

class IndexPage extends Component {
  buttonRef = createRef();

  componentDidMount() {
    waitForGlobal('mdc').then(this.addRipple);
  }

  addRipple = mdc => {
    if (this.buttonRef.current) {
      mdc.ripple.MDCRipple.attachTo(this.buttonRef.current);
    }
  };

  render = () => (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">
        <button className="foo-button mdc-button mdc-button--raised" ref={this.buttonRef}>
          Go to Page 2
        </button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
