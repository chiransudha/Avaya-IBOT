'use strict';

const WIT_TOKEN = 'Q4GGIFA7TFWZ2E5FGDZT7DFOR6FTDHZN'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAJgRVVJWfkBAPbHRLb7jbFkR7h7rvnNZB7762ZCPFzEZBngrbfiUtdY1RvWDlvqus4V7Tl5q8LGG6Ha2oM1ZBiZB3ZBPItVO9nClwjgLZAHDak5WuZC6JAeoMEbuPZBd62r7oqRVnFZCnbIiUXzrfVesoqbD4PopcaxNuLIn6p1FoMDDp4L8VkNsP';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: 'Q4GGIFA7TFWZ2E5FGDZT7DFOR6FTDHZN',
  FB_PAGE_TOKEN: 'EAAJgRVVJWfkBAPbHRLb7jbFkR7h7rvnNZB7762ZCPFzEZBngrbfiUtdY1RvWDlvqus4V7Tl5q8LGG6Ha2oM1ZBiZB3ZBPItVO9nClwjgLZAHDak5WuZC6JAeoMEbuPZBd62r7oqRVnFZCnbIiUXzrfVesoqbD4PopcaxNuLIn6p1FoMDDp4L8VkNsP',
  FB_VERIFY_TOKEN: 'just_do_it',
}
