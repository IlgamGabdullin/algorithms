export const getCoordsByDistance = (current, distance, angle = 0) => {
  const angleInRad = angle * Math.PI / 180;

  const coords = {
    x: Math.floor(current.x + distance * Math.cos(angleInRad)),
    y: Math.floor(current.y + distance * Math.sin(angleInRad))
  };

  return coords;
}