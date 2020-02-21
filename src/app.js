import express from 'express';
import nunjucks from 'nunjucks';
import DoeController from './controllers/DoeController';

class App {
  constructor() {
    this.server = express();

    this.routes();
    this.render();
  }

  render() {
    this.server.use(express.static('public'));
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.middlewares();

    nunjucks.configure('public', {
      express: this.server,
      autoescape: true,
      noCache: true
    });

    this.server.get('/', DoeController.index);

    this.server.post('/', DoeController.store);

  }
}
export default new App().server;
