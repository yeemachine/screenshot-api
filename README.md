Node Webshot to Base64
==========================

**Node Webshot**

This simple API uses [Node-Webshot](https://github.com/brenden/node-webshot) to take a screenshot of a given URL and then converts it into a Base64 Data URI. Created for [VR-Browser](https://github.com/yeemachine/vr-browser).

**Options**

This version takes only 2 arguments: a URL and a screen width (optional).

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
      <th>url</th>
      <td>
<pre>{ url: 'google.com'}</pre>
      </td>
      <td>The website URL for screenshotting. No need for headers.</td>
    </tr>
    <tr>
      <th>width</th>
      <td>
<pre>{ width: 1000}</pre>
      </td>
      <td>The dimensions of the browser window.</td>
    </tr>
  
  </tbody>
</table>