import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Ipsum from '../components/ipsum';

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link className="btn btn-outline-success" to="/">
      Go back to the homepage
    </Link>
    <Ipsum />
    <Ipsum />
    <Ipsum />
  </Layout>
);

export default SecondPage;
