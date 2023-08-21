const { configDotenv } = require('dotenv');
const Item = require('../../models/item');
const Country = require('../../models/country');

module.exports = {
	index,
	indexCities,
	indexCitiesOfCountry,
	show,
  showRoundFlights
};

async function index(req, res) {
	try {
		const countries = await Country.find({})
			.sort('name')
			.populate('category')
			.exec();
		// re-sort based upon the sortOrder of the categories
		countries.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
		res.status(200).json(countries);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function indexCities(req, res) {
	try {
		const cities = await Item.find({}).sort('name').populate('country').exec();
		res.status(200).json(cities);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function indexCitiesOfCountry(req, res) {
	try {
		const items = await Item.find({ country: req.params.id })
			.sort('name')
			.populate('country')
			.exec();
		res.status(200).json(items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const item = await Item.findById(req.params.id);
		res.status(200).json(item);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function updatePrice(req, res) {
  try{
    const city = await Item.findByIdAndUpdate({_id: req.params.id}, req.body.price, {new: true})
    res.status(200).json(city)
  } catch(e) {
    res.status(400).json({ msg: e.message })
  }
}

async function showRoundFlights(req, res) {
  const {departureAirport, arrivalAirport, departureDate, arrivalDate, cabinClass} = req.body
	try {
		const response = await fetch(
			`https://api.flightapi.io/roundtrip/${process.env.API_KEY}/${departureAirport}/${arrivalAirport}/${departureDate}/${arrivalDate}/1/0/0/${cabinClass}/USD`
		);
		const data = await response.json();
    const flightData = data.legs.map((leg) => {
      return {
        departureTime: leg.departureTime,
        arrivalTime: leg.arrivalTime,
        airlineCode: Array.isArray(leg.airlineCodes) && leg.airlineCodes.length ? leg.airlineCodes.join(',') : leg.airlineCodes
      }
    })
    res.json(flightData)
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

/*
https://api.flightapi.io/onewaytrip/api_key/departure_airport_code/arrival_airport_code/departure_date/number_of_adults/number_of_childrens/number_of_infants/cabin_class/currency"
// require the Unirest or any other module to make an HTTP GET request
const unirest = require('unirest')

unirest.get('https://api.flightapi.io/onewaytrip/api_key/departure_airport_code/arrival_airport_code/departure_date/number_of_adults/number_of_childrens/number_of_infants/cabin_class/currency')
  .then(response => {
    console.log(response.body);
  })
  .catch(error => {
    console.log(error);
  });


// Set your API key before making the request
import requests

resp = requests.get('https://api.flightapi.io/onewaytrip/api_key/departure_airport_code/arrival_airport_code/departure_date/number_of_adults/number_of_childrens/number_of_infants/cabin_class/currency')
print (resp.json()) */
