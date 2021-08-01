import React, { Component } from 'react';
import Moment from 'moment';

export default class Footer extends Component {
    render() {
      var locale = window.navigator.userLanguage || window.navigator.language;
      Moment.locale(locale);
        return (
            <div>
  <footer className="main-footer">
    <strong>Copyright © {Moment(Date.now()).format('Y')} <a href="#">E-TEST</a>.</strong>
    All rights reserved.
  </footer>
</div>

        )
    }
}
