const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/cities
router.get('/cities', itemsCtrl.indexCities);
// GET /api/items/country/:id
router.get('/country/:id', itemsCtrl.indexCitiesOfCountry);
//JFK/SAN/2023-08-17/2023-08-26/Economy
// GET /api/items/:departureAirport/:arrivalAirport/:departureDate/:arrivalDate/:cabinClass
router.post('/flights', itemsCtrl.showRoundFlights);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);


module.exports = router;
