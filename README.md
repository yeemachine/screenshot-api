Node Webshot to Base64 API
==========================

This simple API uses [Node-Webshot](https://github.com/brenden/node-webshot) to take a screenshot of a given URL and then converts it into a Base64 Data URI. Created for [VR-Browser](https://github.com/yeemachine/vr-browser).

**Options**

This simplified version takes 2 parameters: a URL and a screen width (optional).

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
      <td>The website URL. No need for headers. Takes a string. If given an invalid URL, it will return a screenshot of a Google image search of the string.</td>
    </tr>
    <tr>
      <th>width</th>
      <td>
1000
      </td>
      <td>The dimension of the browser window width. Takes a value.</td>
    </tr>
  
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Response</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  
  
  <tbody>
   <tr>
      <th>image</th>
      <td>
'data:image/jpg;base64...'
      </td>
      <td>Returns a Base64 image.</td>
    </tr>
    
    <tr>
    
      <th>dimensions</th>
      <td>
'{width: 1440, height: 768, type: "png"}'
</td>
      <td>Returns the dimensions and file type of the screenshot.</td>
    </tr>
    <tr>
    <th>color</th>
      <td>
'DarkMuted: {_rgb: Array(3), _population: 1, _hsl: Array(3)}
DarkVibrant: {_rgb: Array(3), _population: 0}
LightMuted: {_rgb: Array(3), _population: 89, _hsl: Array(3)}
LightVibrant: {_rgb: Array(3), _population: 15, _hsl: Array(3)}
Muted: {_rgb: Array(3), _population: 59, _hsl: Array(3)}
Vibrant: {_rgb: Array(3), _population: 27, _hsl: Array(3)}'
</td>
<td>Returns the dimensions and file type of the screenshot.</td>
    </tr>
  
  </tbody>
</table>
