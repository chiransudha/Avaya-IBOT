'use strict'

var Config = require('../config')
var FB = require('../connectors/facebook')
var Wit = require('node-wit').Wit
var request = require('request')
var Promise = require('promise')
var witai_speech = require('witai-speech');

var firstEntityValue = function (entities, entity) {
	var val = entities && entities[entity] &&
		Array.isArray(entities[entity]) &&
		entities[entity].length > 0 &&
		entities[entity][0].value

	if (!val) {
		return null
	}
	return typeof val === 'object' ? val.value : val
}


var actions = {
	say (sessionId, context, message, cb) {
		// Bot testing mode, run cb() and return
		if (require.main === module) {
			cb()
			return
		}

		console.log('WIT WANTS TO TALK TO:', context._fbid_)
		console.log('WIT HAS SOMETHING TO SAY:', message)
		console.log('WIT HAS A CONTEXT:', context)

		if (checkURL(message)) {
			FB.newMessage(context._fbid_, message, true)
		} else {
			FB.newMessage(context._fbid_, message)
		}


		cb()

	},

	merge(sessionId, context, entities, message, cb) {
		// Reset the story
		delete context.status
		delete context.intentType
		delete context.loc

  		console.log("merge function at the start");
		// Retrive the location entity and store it in the context field


       var intentType = firstEntityValue(entities, 'intent')
       if (intentType) {

      			context.intentType = intentType
      			console.log("context intent type ->" + intentType);
          }

      else {

        console.log("unable to fetch intent type");
      }

       console.log("before fetching entity Id -order/ quote");
		var loc = firstEntityValue(entities, 'number')
		if (loc) {
			context.loc = loc
			console.log("context intent type ->" + loc);
			if(!intentType) {

			intentType	= 'order';

		}

		}

		// Reset the cutepics story
		delete context.pics

		// Retrieve the category
		var productType = firstEntityValue(entities, 'product')
		if (productType) {
			context.cat = productType
		}

		// Retrieve the sentiment
		var sentiment = firstEntityValue(entities, 'sentiment')
		if (sentiment) {
			context.ack = sentiment === 'positive' ? 'Glad your liked it!' : 'Aww, that sucks.'
		} else {
			delete context.ack
		}

		cb(context)
	},

	error(sessionId, context, error) {
		console.log(error.message)
	},

	// list of functions Wit.ai can execute
	['fetch-Id'](sessionId, context, cb) {
		// Here we can place an API call to a weather service
		 if (context.loc) {
		 	console.log("Entering in to the main function");
		 	getId(context.loc, context.intentType)
		 		.then(function (response) {
		 			if(response){
		 				var status = JSON.parse(response);

		 			if(status.orderStatusDesc) {
                        context.status = status.orderStatusDesc;

		 			}
		 			else {

		 				context.status = status.error;

		 			}

		 			}

		 			cb(context);
		 		})
		 		.catch(function (err) {
		 			console.log(err);
		 			context.status = "Please enter a valid Order/Quote Information. Say something like order status with order number or quote status with quote number " ;
		 			cb(context);
		 		})

		 }

	},


	['fetch-pics'](sessionId, context, cb) {
		var wantedPics = allPics[context.cat || 'default']
		context.pics = wantedPics[Math.floor(Math.random() * wantedPics.length)]

		cb(context)
	},
}

// SETUP THE WIT.AI SERVICE
var getWit = function () {
	console.log('GRABBING WIT')
	return new Wit(Config.WIT_TOKEN, actions)
}

module.exports = {
	getWit: getWit,
}

// BOT TESTING MODE
if (require.main === module) {
	console.log('Bot testing mode!')
	var client = getWit()
	client.interactive()
}

var getId = function (location, intType) {
	return new Promise(function (resolve, reject) {

         console.log("before checking intent order type");

		if(intType === 'order')
        	{
  			 var url =  'https://thawing-eyrie-66536.herokuapp.com/orderDetails?orderId=' + location ;
             console.log("the URL is ->  " + url);

            }
           else if (intType === 'quote')
           {


           	var url =  'https://thawing-eyrie-66536.herokuapp.com/quoteInfo?quoteId=' + location ;
           	console.log("the URL is ->  " + url);

        	}

        	else {

        		console.log("unable to find intent type");

        	}

		request(url, function (error, response, body) {
			if(!error)
				//return resolve(response);
		    	return resolve(body);
		    	console.log("the response  is ->  " + body);

			})

	})
}


// CHECK IF URL IS AN IMAGE FILE
var checkURL = function (url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

// LIST OF ALL PICS
var allPics = {
  corgis: [
    'http://i.imgur.com/uYyICl0.jpeg',
    'http://i.imgur.com/useIJl6.jpeg',
    'http://i.imgur.com/LD242xr.jpeg',
    'http://i.imgur.com/Q7vn2vS.jpeg',
    'http://i.imgur.com/ZTmF9jm.jpeg',
    'http://i.imgur.com/jJlWH6x.jpeg',
		'http://i.imgur.com/ZYUakqg.jpeg',
		'http://i.imgur.com/RxoU9o9.jpeg',
  ],
  racoons: [
    'http://i.imgur.com/zCC3npm.jpeg',
    'http://i.imgur.com/OvxavBY.jpeg',
    'http://i.imgur.com/Z6oAGRu.jpeg',
		'http://i.imgur.com/uAlg8Hl.jpeg',
		'http://i.imgur.com/q0O0xYm.jpeg',
		'http://i.imgur.com/BrhxR5a.jpeg',
		'http://i.imgur.com/05hlAWU.jpeg',
		'http://i.imgur.com/HAeMnSq.jpeg',
  ],
  default: [
    'http://i.imgur.com/wkAEvVH.jpg',
  ],
};
