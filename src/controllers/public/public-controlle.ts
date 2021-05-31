import * as express from 'express';
class PublicController {
  constructor () {
  }
  firstMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'Public: Hello World'
    });
  }
  secondMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'Public: Hello World one'
    });
  }
  thirdMethod = ( request: express.Request, response: express.Response ) => {
    response.status(200).json({
        message: 'Public: Hello World two'
    });
  }

}

export default new PublicController();