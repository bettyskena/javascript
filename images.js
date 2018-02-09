// Compute the difference in NDVI.
var ndviDifference = ndvi2.subtract(ndvi1);
// Load the land mask from the SRTM DEM.
var landMask = ee.Image('CGIAR/SRTM90_V4').mask();

// Update the NDVI difference mask with the land mask.
var maskedDifference = ndviDifference.updateMask(landMask);

// Display the masked result.
var vizParams = {min: -0.5, max: 0.5, palette: ['FF0000', 'FFFFFF', '0000FF']};
Map.setCenter(-122.2531, 37.6295, 9);
Map.addLayer(maskedDifference, vizParams, 'NDVI difference');
      
