# canvas-dom-line
use canvas to draw line between 2 doms [demo](https://jsbin.com/woletovuha/edit?html,css,js,output)

## Usage
* `npm i canvas-dom-line`

```javascript
import CanvasDomLine from 'canvas-dom-line';

const $root = document.querySelector('.container');
const $point1 = document.querySelector('.point1');
const $point2 = document.querySelector('.point2');
const $point3 = document.querySelector('.point3');
const $point4 = document.querySelector('.point4');

//init container as the root dom
//container mast have style: {position: relative;}
const canvasDomLine = new CanvasDomLine($root);

canvasDomLine.drawLine($point1, $point2);
canvasDomLine.drawLine($point1, $point3);
canvasDomLine.drawLine($point1, $point4);
canvasDomLine.drawLine($point2, $point3);
canvasDomLine.drawLine($point2, $point4);
canvasDomLine.drawLine($point3, $point4);
```


### API

* `drawLine(from: Dom, to: Dom, [options]: Object)`

  drawLine alse accept options. e.g. `options = {color: red, width: '2px'};`

* `clear()`

  clear canvas;
