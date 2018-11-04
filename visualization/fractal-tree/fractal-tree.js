const tree = (stepLength, coords, angle, ctx) => {
  if (stepLength > 5) {

    const newCoords = getCoordsByDistance(coords, stepLength, angle);

    ctx.lineTo(newCoords.x, newCoords.y);
    ctx.stroke();
    tree(stepLength - 10, newCoords, angle - 25, ctx);

    ctx.moveTo(newCoords.x, newCoords.y);
    tree(stepLength - 10, newCoords, angle + 25, ctx);
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

  tree(70, coords, 90, ctx)
}

main();

function getCoordsByDistance(current, distance, angle = 0) {
  const angleInRad = angle * Math.PI / 180;

  const coords = {
    x: Math.floor(current.x + distance * Math.cos(angleInRad)),
    y: Math.floor(current.y + distance * Math.sin(angleInRad))
  };

  return coords;
}