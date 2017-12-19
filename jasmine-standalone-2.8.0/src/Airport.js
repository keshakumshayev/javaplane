function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  return this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  this.planes.pop();
  return this.planes;
};
