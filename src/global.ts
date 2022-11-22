import { parse } from 'querystring';

const questString = window.location.search.split('?')[1] || '';
const queryObj = parse(questString) || {};

if (queryObj.access_token) {
  localStorage.setItem('token', `bearer ${queryObj.access_token}` || '');
}
if (queryObj.id) {
  localStorage.setItem('iframId', `${queryObj.id}` || '');
}
