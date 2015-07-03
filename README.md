## render-maybe

Render a React component conditionally. 

Basic usage:

```
var renderMaybe = require("render-maybe");
var React = require("React");

var View = React.createClass({
  render() {
    return renderMaybe(data, otherComponent);
  }
});
```

`otherComponent` will only be rendered if data is non-empty or false. See the `spec` folder for examples.

