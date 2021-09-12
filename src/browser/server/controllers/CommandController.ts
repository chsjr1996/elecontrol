import { Request, Response } from "express";
import { spawn } from 'child_process';

class CommandController {

  private tmpCmds = [
    'ls -l',
    'ls',
    'xfce4-terminal -e "htop"',
    'xfce4-terminal -e "thunar"',
    'thunar',
  ];

  async list(_req: Request, res: Response) {
    try {
      return res.json({ commands: this.tmpCmds });
    } catch (e) {
      return res.json({ message: e.message });
    }
  }

  async run(req: Request, res: Response) {
    try {
      const command = req.body.command;

      if (!command || !this.tmpCmds.includes(command)) {
        throw new Error('Unknown command!');
      }

      const child = spawn(command);

      return res.json({
        status: 'success'
      });

    } catch (e) {
      console.log(e);
      return res.json({ message: e.message });
    }
  }
}

export default new CommandController();
