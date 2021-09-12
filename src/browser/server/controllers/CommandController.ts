import { Request, Response } from "express";
import { promisify } from 'util';
import { exec } from 'child_process';

class CommandController {

  async list(_req: Request, res: Response) {
    try {
      return res.json({ commands: [] });
    } catch (e) {
      return res.json({ message: e.message });
    }
  }

  async run(req: Request, res: Response) {
    try {
      const execPromise = promisify(exec);

      const command = req.body.command;

      if (!command) {
        throw new Error('Unknown command!');
      }

      const { stdout, stderr } = await execPromise(command);

      if (stderr) {
        throw new Error(stderr);
      }

      return res.json({
        status: 'success',
        stdout
      });

    } catch (e) {
      console.log(e);
      return res.json({ message: e.message });
    }
  }
}

export default new CommandController();
