describe('Airport', function() {
  var plane = new Plane
  var plane2 = new Plane  
  var airport = new Airport

  it('lands planes', function() {
    airport.land(plane)
    expect(airport.planes).toEqual(jasmine.objectContaining(plane))
  });
});
