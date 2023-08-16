const { configDotenv } = require('dotenv');
const Item = require('../../models/item');
const Country = require('../../models/country')

module.exports = {
  index,
  indexItems,
  show
};

async function index(req, res) {
  try{
    const countries = await Country.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    countries.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(countries);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function indexItems(req, res) {
  try{
    const items = await Item.find({ country: req.params.id }).sort('name');
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function getRoundFlights(departureAirport, arrivalAirport,) {
  const response = await fetch(`https://api.flightapi.io/roundtrip/${process.env.API_KEY}/${departureAirport}/${arrivalAirport}/${departureDate}/number_of_adults/number_of_childrens/number_of_infants/cabin_class/USD`)
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
