const style = {
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  zIndex: '-1',
};

class CanvasDomLine {
  constructor(container) {
    this.rootDom = container;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.rootDom.appendChild(this.canvas);
    this.setStyle();
  }

  //设置canvas样式
  setStyle() {
    Object.keys(style).forEach(e => {
      this.canvas.style[e] = style[e];
    });

    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  //获取距离根节点left, top
  getOffset(node, offsetType) {
    if (node.offsetParent === this.rootDom || node.offsetParent === document.body) {
      return node[offsetType];
    } else {
      return node[offsetType] + this.getOffset(node.offsetParent, offsetType);
    }
  }

  //获取坐标
  getPoint(node) {
    const {
      offsetWidth,
      offsetHeight
    } = node;

    const offsetLeft = this.getOffset(node, 'offsetLeft');
    const offsetTop = this.getOffset(node, 'offsetTop');

    return {
      x: offsetLeft + offsetWidth / 2,
      y: offsetTop + offsetHeight / 2
    };
  }

  //画线
  drawLine(
    from,
    to,
    options = {}
  ) {
    const fromNode = this.getPoint(from);
    const toNode = this.getPoint(to);

    this.context.strokeStyle = options.color || '#000000';
    this.context.lineWidth = options.width || 1;

    this.context.beginPath();
    this.context.moveTo(fromNode.x, fromNode.y);
    this.context.lineTo(toNode.x, toNode.y);
    this.context.stroke();
  }

  //清空画布
  clear() {
    this.context && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default CanvasDomLine;
