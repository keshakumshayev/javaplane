function Airport() {
  this.dockedPlanes = [];
  this.weather = ""
};

Airport.prototype.land = function(plane) {
  return this.dockedPlanes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  if(this.weather === "stormy") throw(new Error("PLANES CANNOT TAKE OFF DURING A STORM"));
  this.dockedPlanes.pop();
  return this.dockedPlanes;
};
