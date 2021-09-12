import * as express from 'express';

export default class App {
  private app: express.Express;

  private isDev = true;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {

  }

  private routes() {
    this.app.get('/', (req, res) => {
      return res.json({ msg: 'Hello!' });
    })
  }

  public startServer() {
    this.app.listen('8089', () => {
      console.log('server is running on: 8089');
    });
  }
}
