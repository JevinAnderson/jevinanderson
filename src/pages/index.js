import React, { Component, createRef } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

class IndexPage extends Component {
  buttonRef = createRef();

  render = () => (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
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
}

export default IndexPage;
