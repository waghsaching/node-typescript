import * as express from 'express';
import PublicRoutes from './routes/public-routes';
import SecureRoutes from './routes/secure-routes';
class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', PublicRoutes);
    this.express.use('/secure',SecureRoutes);
  }
}

export default new App().express