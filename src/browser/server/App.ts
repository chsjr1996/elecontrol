import * as express from 'express';
import router from './router';

export default class App {
  private app: express.Express;

  private isDev = true;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private routes() {
    router(this.app);
  }

  public startServer() {
    this.app.listen('8089', () => {
      console.log('server is running on: 8089');
    });
  }
}

(new App()).startServer();
