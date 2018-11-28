import React, { Component } from 'react';

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

  // componentDidMount() {
  //   addFontAwesome(true)
  //     .then(this.setLoaded)
  //     .catch(this.noop);
  // }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  noop = () => {};

  render = () =>
    this.state.loaded ? (
      <div className="container">
        <div className="row">
          <h4 className="col-12 text-center">Profiles</h4>
        </div>
        <div className="row">
          {PROFILES.map(profile => (
            <div key={profile.alt} className="col-sm-2 text-center">
              <a href={profile.href} className="profile-link" title={profile.alt}>
                <span className={`fab fa-${profile.type}`} alt={profile.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    ) : null;
}

export default Profiles;
