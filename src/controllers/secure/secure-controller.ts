import * as express from 'express';
class SecureController {
  constructor () {
  }
  firstMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'secure: Hello World'
    });
  }
  secondMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'secure: Hello World one'
    });
  }
  thirdMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'secure: Hello World two'
    });
  }

}

export default new SecureController();