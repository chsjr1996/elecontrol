import { Application } from "express";
import commands from "./commands";

export default (app: Application) => {

  const routes = [
    commands
  ];

  routes.forEach(r => r(app));
}
