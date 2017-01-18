'use strict';

const WIT_TOKEN = 'Q4GGIFA7TFWZ2E5FGDZT7DFOR6FTDHZN'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAJgRVVJWfkBAOvpP1CQRXi7gvMBZBM6hqRqOp8634EUr4FtYd0UYewPXglu5HGCC30eAi5nxMv2kDPkauxmO8vVoieAFzo7ieihuEa6RdkDpGNIdtkCskrQkDPUvKbX11UR63BLDvqD2ZCvZBJOTSDlFy7rGNwy3aOkjiMZCHTR8j2w6Voo';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'Sucessfully_compleated_Demo'

module.exports = {
  WIT_TOKEN: 'Q4GGIFA7TFWZ2E5FGDZT7DFOR6FTDHZN',
  FB_PAGE_TOKEN: 'EAAJgRVVJWfkBAOvpP1CQRXi7gvMBZBM6hqRqOp8634EUr4FtYd0UYewPXglu5HGCC30eAi5nxMv2kDPkauxmO8vVoieAFzo7ieihuEa6RdkDpGNIdtkCskrQkDPUvKbX11UR63BLDvqD2ZCvZBJOTSDlFy7rGNwy3aOkjiMZCHTR8j2w6Voo',
  FB_VERIFY_TOKEN: 'Sucessfully_compleated_Demo',
}
