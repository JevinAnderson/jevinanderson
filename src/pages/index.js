import React, { Component } from 'react';
import { Link } from 'gatsby';

import './index.scss';
import Layout from '../components/layout';
import Image from '../components/image';
import Banner from '../components/pages/index/banner/banner';
import Profiles from '../components/pages/index/profiles/index.js';
import { addFontAwesome } from '../utils/add-font-awesome';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      addFontAwesome();
    }
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
            <h4 id="am-brief">Brief</h4>
            <p>
              I'm a professional developer working at <a href="https://www.paypal.com/">PayPal</a>. I work on{' '}
              <a href="https://www.paypal.com/ppcreditapply/da/us/lander">PayPal's Credit offerings</a>. If you have{' '}
              <a href="https://www.paypal.com/ppcreditapply/da/us/lander">PayPal Credit</a>, or one of{' '}
              <a href="https://www.paypal.com/us/for-you/pay-in-4">PayPal's installment plans</a>, you've probably seen
              my work. If you haven't, you might consider trying them out. I'd love to hear your feedback.
            </p>
            <h4>Less Brief</h4>
            <p>
              After High School I served five years in the{' '}
              <a href="https://en.wikipedia.org/wiki/United_States_Marine_Corps">United States Marine Corps</a>. My
              primary MOS was <a href="https://www.cool.navy.mil/usmc/enlisted/2621.htm">2621, Signals intelligence</a>.
              My secondary MOS, was{' '}
              <a href="https://en.wikipedia.org/wiki/Marine_Security_Guard">8151, Marine Security Guard</a>. I was
              stationed at{' '}
              <a href="https://www.iimef.marines.mil/Units/2nd-Radio-Battalion/">Second Radio Battalion(2nd Rad Bin)</a>
              , <a href="https://www.lejeune.marines.mil/">Camp Lejeune, North Carolina</a> in 2004. By 2006 I had
              transitioned into embassy duty, and was stationed at the{' '}
              <a href="https://ca.usembassy.gov/embassy-consulates/ottawa/">American Embassy Ottawa</a>, in{' '}
              <a href="https://en.wikipedia.org/wiki/Ottawa">Ottawa, Canada</a>. In 2007 I was stationed at the{' '}
              <a href="https://mz.usembassy.gov/embassy/maputo/">American Embassy Maputo</a>, in{' '}
              <a href="https://en.wikipedia.org/wiki/Maputo">Maputo, Mozambique</a>. And in 2008 I was stationed at the{' '}
              <a href="https://en.wikipedia.org/wiki/Embassy_of_the_United_States,_Rome">American Embassy Rome</a>, in{' '}
              <a href="https://en.wikipedia.org/wiki/Rome">Rome, Italy</a>.
            </p>
            <p>
              After leaving active service in the Marine Corps, I attended college at the{' '}
              <a href="https://missouri.edu/">University of Missouri, Columbia(Mizzou)</a>. I was an active member of
              the <a href="https://veterans.missouri.edu/">veterans' organization</a>, and encourage veterans to
              consider joining if you're attending Mizzou. I graduated with a{' '}
              <a href="http://catalog.missouri.edu/undergraduategraduate/collegeofengineering/computerscience/bs-computer-science/">
                Bachelor of Science with a major in Computer Science
              </a>
              .
            </p>
            <p>
              After college I worked for <a href="https://en.wikipedia.org/wiki/Esri">Esri</a> doing mobile and web
              development. Afterwards, I worked at <a href="http://www.recruitingventures.com/">Recruiting Ventures</a>{' '}
              doing web development. Currently, I work at PayPal, see <a href="#am-brief">brief</a>.
            </p>
            <p>
              My beautiful <a href="http://www.jamelaanderson.com/">wife</a> and I married December 12th, 2016. Tibbers,
              our Labradoodle, was born September 06, 2017. We welcomed our first son, Everest, April 17, 2020.
            </p>
          </div>
        </div>
      </section>
      <Profiles />

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
}

export default IndexPage;
