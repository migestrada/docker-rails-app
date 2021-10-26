const headers = {
  'Content-Type': 'application/json',
};

const apiUrl = `${location.origin}/api/v${process.env.VERSION || 1}`;
const noApiUrl = `${location.origin}`;

const getUrl = noApi => noApi ? noApiUrl : apiUrl;

const options = (method, body = undefined) => ({
  method: method || 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'same-origin', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers,
  body,
});

export const get = (path, body = undefined, noApi = false) => {
  return () => fetch(`${getUrl(noApi)}${path}`, options());
}

export const post = (path, body = undefined, noApi = false) => {
  return () => fetch(`${getUrl(noApi)}${path}`, options('POST', body))
};
