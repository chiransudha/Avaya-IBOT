'use strict';

const WIT_TOKEN = ''
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAJgRVVJWfkBAHAP7ZAQucT85CJs9FZCPG0OKgdF7ZBItuGa8U5BJCHOvUlEHNkmpEVi1yKJOAoJbe8Gktx7nz3GIQZALPp5L6QkP4RNYuO55vMpfWEbIAZARymIXE4oJOCuYrsSABb4O6wF5EptXFg5HMp6pZByw476TNdG9HsZAnt19gQEjC2';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'Sucessfully_compleated_Demo'

module.exports = {
  WIT_TOKEN: '',
  FB_PAGE_TOKEN: 'EAAJgRVVJWfkBAHAP7ZAQucT85CJs9FZCPG0OKgdF7ZBItuGa8U5BJCHOvUlEHNkmpEVi1yKJOAoJbe8Gktx7nz3GIQZALPp5L6QkP4RNYuO55vMpfWEbIAZARymIXE4oJOCuYrsSABb4O6wF5EptXFg5HMp6pZByw476TNdG9HsZAnt19gQEjC2',
  FB_VERIFY_TOKEN: 'Sucessfully_compleated_Demo',
}

