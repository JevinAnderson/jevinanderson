import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './index.scss';
import Layout from '../components/layout';
import Image from '../components/image';
import Banner from '../components/pages/index/banner/banner';
import { setState, withProvider } from '../utils/redux';

class IndexPage extends Component {
  componentDidMount() {
    setState({
      views: this.props.views + 1
    });
  }

  render = () => (
    <Layout>
      <Banner />
      <section className="container about-me">
        <div className="row">
          <h2 className=" col-12 text-center">About Me</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">Photo of Jevin</div>
          <div className="col-12 col-md-6">
            <h4>Brief</h4>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <h4>Less Brief</h4>
            <p>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna
              mollis ornare vel eu leo.
            </p>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus
              porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur
              est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.
            </p>
            <h4>Conclusion</h4>
            <p>
              Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Donec
              ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean
              eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.
              Curabitur blandit tempus porttitor.
            </p>
          </div>
        </div>
      </section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Page views: {this.props.views}</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">
        <button className="btn btn-success">Go to Page 2</button>
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
