describe('Airport', function() {
  var plane = new Plane
  var airport = new Airport

  it('lands planes', function() {
    airport.land(plane)
    expect(airport.planes).toContain(jasmine.objectContaining(plane))
  });

  it('takes off planes', function() {
    airport.takeoff(plane)
    expect(airport.planes).not.toContain(jasmine.objectContaining(plane))
  });
});
