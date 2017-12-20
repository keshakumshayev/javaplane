describe('Airport', function() {
  var plane = new Plane
  var airport = new Airport

  it('lands planes', function() {
    airport.land(plane)
    expect(airport.dockedPlanes).toContain(jasmine.objectContaining(plane))
  });

  it('takes off planes', function() {
    airport.takeoff(plane)
    expect(airport.dockedPlanes).not.toContain(jasmine.objectContaining(plane))
  });
  describe('safety', function() {
    it('prevents takeoff during storm', function() {
      airport.land(plane)
      airport.weather = 'stormy'
      // console.log(airport);
      expect(function() {airport.takeoff(plane)} ).toThrow(new Error("PLANES CANNOT TAKE OFF DURING A STORM"));
    });
    it('prevents landing during storm', function() {
      airport.weather = 'stormy'
      // console.log(airport);
      expect(function() {airport.land(plane)} ).toThrow(new Error("PLANES CANNOT LAND DURING A STORM"));
    });
  });
});
