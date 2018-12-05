import React, { Component } from 'react';
import cx from 'classnames';

import css from './profiles.module.css';
import PROFILES from './profiles.js';
import { addFontAwesome } from '../../../../utils/add-font-awesome';

class Profiles extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };

    if (typeof window !== 'undefined') {
      addFontAwesome(true)
        .then(this.setLoaded)
        .catch(this.noop);
    }
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  noop = () => {};

  render = () =>
    this.state.loaded ? (
      <section id="online-presence">
      <div className={cx(css.container, "row")}>
        <div className="container">
          <div className="row">
            <h4 className={cx('col-12 text-center', css.header)}>Online Presence</h4>
          </div>
          <div className="row">
            {PROFILES.map(profile => (
              <div key={profile.alt} className="col-6 col-sm-2 text-center">
                <a href={profile.href} className="profile-link" title={profile.alt}>
                  <span className={cx(css.icon, profile.class)} alt={profile.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    ) : null;
}

export default Profiles;
