let canvas, context, rootDom;

//设置canvas样式
function setStyle() {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.position = 'absolute';
  canvas.style.zIndex = '-1';

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

//初始化
function init(container) {
  canvas = document.createElement('canvas');
  context = canvas.getContext('2d');
  container.appendChild(canvas);
  rootDom = container;
  setStyle();
}

//获取距离根节点left
function getOffsetLeft(node) {
  if (node.offsetParent === rootDom || node.offsetParent === document.body) {
    return node.offsetLeft;
  } else {
    return node.offsetLeft + getOffsetLeft(node.offsetParent);
  }
}

//获取距离根节点top
function getOffsetTop(node) {
  if (node.offsetParent === rootDom || node.offsetParent === document.body) {
    return node.offsetTop;
  } else {
    return node.offsetTop + getOffsetTop(node.offsetParent);
  }
}

//获取坐标
function getPoint(node) {
  const {
    offsetWidth,
    offsetHeight
  } = node;

  const offsetLeft = getOffsetLeft(node);
  const offsetTop = getOffsetTop(node);

  return {
    x: offsetLeft + offsetWidth / 2,
    y: offsetTop + offsetHeight / 2
  };
}

//画线
function drawLine(
  from,
  to,
  options = {}
) {
  const fromNode = getPoint(from);
  const toNode = getPoint(to);

  context.strokeStyle = options.color || '#000000';
  context.lineWidth = options.width || 1;

  context.beginPath();
  context.moveTo(fromNode.x, fromNode.y);
  context.lineTo(toNode.x, toNode.y);
  context.stroke();
}

//清空画布
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

export default {
  init,
  drawLine,
  clear
};
