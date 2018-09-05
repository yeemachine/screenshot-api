Node Webshot to Base64 API
==========================

This simple API uses [Node-Webshot](https://github.com/brenden/node-webshot) to take a screenshot of a given URL and then converts it into a Base64 Data URI. Created for [VR-Browser](https://github.com/yeemachine/vr-browser).

**Options**

This version takes only 2 queries: a URL and a screen width (optional).

Example: https://screenshot-api.herokuapp.com/webshot?url=google.com&width=1440

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
'google.com'
      </td>
      <td>The website URL. No need for headers. Takes a string.</td>
    </tr>
    <tr>
      <th>width</th>
      <td>
1000
      </td>
      <td>The dimensions of the browser window. Takes a value.</td>
    </tr>
  
  </tbody>
</table>