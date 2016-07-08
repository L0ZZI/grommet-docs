// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../DocsArticle';
import { updatePageTitle } from '../utils/a11y';

export default class DateTime extends Component {
  componentDidMount () {
    updatePageTitle('Date Time');
  }

  render () {
    return (
      <DocsArticle title="Date and Time" colorIndex="neutral-2">
        <section>
          <p>Date and time formats should generally be displayed in the user’s
          local timezone.  Any exceptions to this should include the timezone being
          used to display the time and date. Here are examples of recommended
          date and time
          formats. The <a href="http://index.grommet.io/docs/grommet-index/timestamp">
          Timestamp</a> component
          in <code>grommet-index</code> provides an implementation of this.
          </p>

          <ul>
            <li>Apr 28, 2016 2:47 pm</li>
            <li>Apr 28, 2016</li>
            <li>Apr 28</li>
            <li>2:47 pm</li>
            <li>Apr 28, 2016 2:47:23 pm</li>
          </ul>
        </section>
      </DocsArticle>
    );
  }
};
