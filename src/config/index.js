const URL_BACKEND = window.location.hostname.includes('localhost')
? 'http://localhost:3000'
: 'https://jkflix.herokuapp.com';

export default {
  URL_BACKEND,
};