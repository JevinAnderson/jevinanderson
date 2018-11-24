import React, { Component } from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';

import Layout from '../components/layout';
import Ipsum from '../components/ipsum';

class SecondPage extends Component {
  navigate = event => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target.getAttribute('data-scroll-target');
    const $target = $(target);

    $('html, body').animate(
      {
        scrollTop: $target.offset().top
      },
      600
    );
  };

  render = () => (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link className="btn btn-outline-success" to="/">
        Go back to the homepage
      </Link>
      <ul className="navbar-nav ml-auto">
        {['1', '2', '3', 4].map(key => (
          <li key={key} className="nav-item">
            <a className="nav-link" data-scroll-target={`#${key}`} href={`#${key}`} onClick={this.navigate}>
              {key}
            </a>
          </li>
        ))}
      </ul>
      <Ipsum id="1" />
      <Ipsum id="2" />
      <Ipsum id="3" />
      <Ipsum id="4" />
    </Layout>
  );
}

export default SecondPage;
