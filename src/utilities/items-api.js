import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getAllCities(countryId) {
  return sendRequest(`${BASE_URL}/${countryId}`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}