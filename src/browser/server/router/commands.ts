import { Application } from 'express';
import CommandController from '../controllers/CommandController';

export default (app: Application) => {
  
  const prefix = '/commands';

  app.get(`${prefix}`, CommandController.list.bind(CommandController));
  app.post(`${prefix}/run`, CommandController.run.bind(CommandController));
}
