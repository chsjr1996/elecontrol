# Elecontrol 

![elecontrol-cover](https://repository-images.githubusercontent.com/250954487/fa559280-786a-11ea-8aa5-997defa997f9)

This application host a ExpressJS serve to allow manage Operation System commands and expose a webview to use them. Then you can control your PC by create commands like: open an application, change brightness, and others...

---

## Requirements

- NodeJS > v13
- Npm

---

## Main technologies

- Electron 9
- ReactJS 16
- React Router Dom 5
- Typescript 3
- And others...

---

## Installation

Clone and install dependencies

- `git clone https://github.com/chsjr1996/elecontrol.git`
- `npm install`

Copy `.env.example` to `.env` and fill the envs correctly

For compile all ReactJS files in a bundle package and Browser TS files for execute Electron use:

- `npm run dev`

This command execute concurrently the two below commands:

- `npm run dev:webpack` and `npm run electron:compile`

The `npm run dev:webpack` compile all ReactJS files and `npm run electron:compile` all TS files in Browser directory for electron execution.

> Note: The `npm run dev:electron:run` command, this wait for webpack server (where ReactJS will run) and execute the **start-dev.js** script for open electron process.

> Note: You can use only `npm run dev:webpack` process or only `npm run electron:compile` or `npm run dev:electron:run`, but remember that the last command wait for webpack server and electron can't run without it

---

## Build

For now, only linux build is available, and it's in .deb and .pacman format. If you want build, then use:

- `npm run build:linux`

This command will "compile" Electron (tsc), ReactJS (webpack) and execute **electron-builder** to generate linux packages.

> TODO: Generate more Linux packages format, and when possible Windows and MacOS too.

---

## Under developement

---

License: MIT
