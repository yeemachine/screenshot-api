Welcome to the Glitch BETA
==========================

**Node Webshot**

Web screenshots are taken with [Node-Webshot](https://github.com/brenden/node-webshot), used in this simple single-use api [screenshot-api](https://github.com/yeemachine/screenshot-api).

## Options
An optional `options` object can be passed as the parameter directly preceding
the callback in a call to webshot.

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>windowSize</th>
      <td>
<pre>{ width: 1024
, height: 768 }</pre>
      </td>
      <td>The dimensions of the browser window. <em>screenSize</em> is an alias
      for this property.</td>
    </tr>
    <tr>
      <th>shotSize</th>
      <td>
<pre>{ width: 'window'
, height: 'window' }</pre>
      </td>
      <td>The area of the page document, starting at the upper left corner, to
      render. Possible values are 'screen', 'all', and a number defining a
      pixel length.
      <br /> <br />
      <strong>'window'</strong> causes the length to be set to the length of
      the window (i.e. the shot displays what is initially visible within the
      browser window).
      <br /> <br />
      <strong>'all'</strong> causes the length to be set to the length of the
      document along the given dimension. </td>
    </tr>
    <tr>
      <th>shotOffset</th>
      <td><pre>{ left: 0
, right: 0
, top: 0
, bottom: 0 }</pre></td>
      <td>The left and top offsets define the upper left corner of the
      screenshot rectangle. The right and bottom offsets allow pixels to be
      removed from the shotSize dimensions (e.g. a shotSize height of 'all' with
      a bottom offset of 30 would cause all but the last 30 rows of pixels on
      the site to be rendered).</td>
    </tr>
    <tr>
      <th>phantomPath</th>
      <td>'phantomjs'</td>
      <td>The location of phantomjs. Webshot tries to use the binary provided by
      the phantomjs NPM module, and falls back to 'phantomjs' if the module
      isn't available.</td>
    </tr>
    <tr>
      <th>phantomConfig</th>
      <td>{}</td>
      <td>Object with key value pairs corresponding to phantomjs <a
      href="http://phantomjs.org/api/command-line.html">command
      line options</a>. Don't include `--`. For example:
      `phantomConfig: {'ignore-ssl-errors': 'true'}`</td>
    </tr>
    <tr>
      <th>cookies</th>
      <td>[]</td>
      <td>List of cookie objects to use, or null to disable cookies.</td>
    </tr>
    <tr>
      <th>customHeaders</th>
      <td>null</td>
      <td>Any additional headers to be sent in the HTTP request.</td>
    </tr>
    <tr>
      <th>defaultWhiteBackground</th>
      <td>false</td>
      <td>When taking the screenshot, adds a white background if not defined
      elsewhere.</td>
    </tr>
    <tr>
      <th>customCSS</th>
      <td>''</td>
      <td>When taking the screenshot, adds custom CSS rules if defined.</td>
    </tr>
    <tr>
      <th>quality</th>
      <td>75</td>
      <td>JPEG compression quality. A higher number will look better, but creates
        a larger file. Quality setting has no effect when streaming.</td>
    </tr>
    <tr>
      <th>streamType</th>
      <td>'png'</td>
      <td>If streaming is used, this designates the file format of the streamed
      rendering. Possible values are 'png', 'jpg', and 'jpeg'.  </td>
    </tr>
    <tr>
      <th>siteType</th>
      <td>'url'</td>
      <td>siteType indicates whether the content needs to be requested ('url'),
      loaded locally ('file'), or is being provided directly as a string
      ('html').</td>
    </tr>
    <tr>
      <th>renderDelay</th>
      <td>0</td>
      <td>Number of milliseconds to wait after a page loads before taking the
      screenshot.</td>
    </tr>
    <tr>
      <th>timeout</th>
      <td>0</td>
      <td>Number of milliseconds to wait before killing the phantomjs process
      and assuming webshotting has failed.  (0 is no timeout.)</td>
    </tr>
    <tr>
      <th>takeShotOnCallback</th>
      <td>false</td>
      <td>Wait for the web page to signal to webshot when to take the photo
      using <code>window.callPhantom('takeShot');</code></td>
    </tr>
    <tr>
      <th>errorIfStatusIsNot200</th>
      <td>false</td>
      <td>If the loaded page has a non-200 status code, don't take a screenshot, cause an error instead.</td>
    </tr>
    <tr>
      <th>errorIfJSException</th>
      <td>false</td>
      <td>If a script on the page throws an exception, don't take a screenshot, cause an error instead.</td>
    </tr>
    <tr>
      <th>captureSelector</th>
      <td>false</td>
      <td>Captures the page area containing the provided selector and saves it to file.</td>
    </tr>
  </tbody>
</table>