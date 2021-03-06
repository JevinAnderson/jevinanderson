import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import Navigation from './navigation';
import { withProvider } from '../utils/redux';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `Jevin Anderson's personal website.` },
            { name: 'keywords', content: 'jevin, anderson, personal, website, developer' }
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
        </Helmet>
        <div className="container-fluid noLeftPadding noRightPadding">
          <Navigation />
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default withProvider(Layout);
