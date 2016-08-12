// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';

export default class Accessibility extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Accessibility" colorIndex="neutral-5">

        <section>
          <p>Products that are accessible to all users are good for people,
          products, and business.  All users should be empowered with access
          and the ability to have a pleasant experience with your
          application.</p>

          <p>We follow the <a href="http://www.w3.org/TR/WCAG20/">Web Content
          Accessibility Guidelines (WCAG)</a>.  By following this style guide
          and utilizing the accompanying implementation platform, you will be
          well on your way to satisfying the WCAG recommendations.</p>
        </section>

        <section>
          <p>This section describes the Grommet guidelines for developing
            accessible applications.</p>

          <h3>Icons</h3>
          <p>The icon components can be read by screen readers. The default
            textual description for icons can be overridden by setting
            the a11yTitle. The default title or a11yTitle attribute use
            localization if it exist.</p>
          <h4>Example:</h4>
          <Table>
            <caption>Example of Icons with different values</caption>
            <thead>
              <tr>
              <th>Icon</th>
              <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Status value="critical"/></td>
                <td><pre><code className="html hljs xml">
                  {"<Status value=\"critical\">"}</code></pre></td>
              </tr>
              <tr>
                <td><Status value="critical" a11yTitle="Server Down"/></td>
                <td><pre><code className="html hljs xml">
                  {"<Status value=\"critical\" a11yTitle=\"Server Down\">"}
                </code></pre></td>
              </tr>
            </tbody>
          </Table>

          <h3>Menu</h3>
          <p>
            The Grommet Menu component also supports screen readers. By default,
            the Menu component assumes the "menu" role and the focusable
            children passed to this component receive the "menuitem" role. The
            user can navigate the Menu by using either the tab or arrow keys.
          </p>

          <h3>Lang attribute</h3>
          <p>
            If the lang attribute is not explicitly set in the html
            element, Grommet will specify the lang attribute according to
            the user browser’s locale. In addition to the html element,
            lang attribute can be set on other elements like App.
          </p>
          <h4>Example</h4>
          <pre><code className="html hljs xml">
            {"<App lang=\"en-US\">\n  ...\n</App>"}
          </code></pre>
          <h3>Skip Links</h3>
          <p>Grommet has skip links that make it easy to skip repetitive
            content. Grommet skip links have two locations: Skip to Main
            Content and Skip to Footer. To set the "Skip to Main Content"
            link in Grommet, an attribute primary="true" needs to be added
            to the main content element. The "Skip to Footer" link is
            added by default with the Footer component. </p>
          <h4>Example:</h4>
          <pre><code className="html hljs xml">
            {"<App>\n" +
            "  <Article>\n" +
            "    <Header>\n" +
            "      <h1>Title</h1>\n" +
            "    </Header>\n" +
            "    <Section primary={true}>\n" +
            "      <h2>Heading</h2>\n" +
            "      <p>Lorem ipsum ...</p>\n" +
            "    </Section>\n" +
            "  </Article>\n" +
            "</App>"}
          </code></pre>
        </section>
      </DocsArticle>
    );
  }
};
