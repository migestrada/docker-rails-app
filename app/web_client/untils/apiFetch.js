const headers = {
  'Content-Type': 'application/json',
  //'Authorization': `Bearer ${localStorage.getItem('token')}`
};

const apiUrl = `${location.origin}/api/v${process.env.VERSION || 1}`;
const noApiUrl = location.origin;

const getUrl = (noApi, path) => `${noApi ? noApiUrl : apiUrl}${path}`;

const options = (method, body = undefined) => ({
  method: method || 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'same-origin', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers,
  body: JSON.stringify(body),
});

export const get = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options());

export const post = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options('POST', body));

export const del = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options('DELETE'));
