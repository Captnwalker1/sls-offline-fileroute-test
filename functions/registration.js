'use strict';
/* eslint-disable no-console */

global.Promise = require('bluebird');
// const middy = require('middy');

// const {
//   httpHeaderNormalizer,
//   jsonBodyParser,
//   httpErrorHandler,
//   jsonErrorHandler,
//   appError,
//   appscret,
//   regValidationJson,
//   validateToken
// } = require('../lib/middlewares');

// let { omit } = require('ramda');
// let { toUtcDate } = require('../lib/utils/utils');
// let filterInfo = omit(['sva']);

let handler = async event => {
  try {
    console.log('Entering....');
    let user = {username: "test"}
    const response = {
      statusCode: 200,
      body: JSON.stringify(user, null, ''),
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      }
    };
    return response;
  } catch (err) {
    log('caught in final');
    // console.log(err);
    flushLog();
    throw err;
  }
};

module.exports.handler = handler

// module.exports.handler = middy(handler)
//   .use(appscret())
//   .use(httpHeaderNormalizer())
//   .use(jsonBodyParser())
//   .use(validateToken())
//   .use(regValidationJson())
//   .use(httpErrorHandler({ logger: false }))
//   .use(jsonErrorHandler())
//   .use(appError());
