import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getAllCities() {
  return sendRequest(`${BASE_URL}/cities`);
}

export function getCountryCities(countryId) {
  return sendRequest(`${BASE_URL}/country/${countryId}`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}