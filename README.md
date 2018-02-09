# javascript

// Compute the difference in NDVI.
var ndviDifference = ndvi2.subtract(ndvi1);
// Load the land mask from the SRTM DEM.
var landMask = ee.Image('CGIAR/SRTM90_V4').mask();

// Update the NDVI difference mask with the land mask.
var maskedDifference = ndviDifference.updateMask(landMask);
