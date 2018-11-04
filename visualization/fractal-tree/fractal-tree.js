import { getCoordsByDistance } from '../utils';

const tree = (stepLength, coords, angle, ctx) => {
  if (stepLength > 10) {

    const newCoords = getCoordsByDistance(coords, stepLength, angle);

    ctx.lineTo(newCoords.x, newCoords.y);
    ctx.stroke();
    tree(stepLength - 10, newCoords, angle - 45, ctx);

    ctx.moveTo(newCoords.x, newCoords.y);
    tree(stepLength - 10, newCoords, angle + 45, ctx);
  }
}

const main = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const coords = {x: 250, y: 0};

  // kind of workaround. setting start points to left bottom corner
  ctx.transform(1, 0, 0, -1, 0, canvas.height)
  
  ctx.beginPath();
  ctx.moveTo(coords.x, coords.y);

  tree(60, coords, 90, ctx)
}

main();
