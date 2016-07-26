// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../components/DocsArticle');
var A11y = require('./utils/a11y');

var ActionsDoc = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Actions');
  },

  render: function() {
    return (
      <DocsArticle title="Actions" colorIndex="neutral-2">

        <p>TBD</p>

        <section>
          <h2>Example</h2>

          <div className="example">
          </div>
        </section>

        <section>
          <h2>Details</h2>
          <div className="tbd">TBD</div>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ActionsDoc;
