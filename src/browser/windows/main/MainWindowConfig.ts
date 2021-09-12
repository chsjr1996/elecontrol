import envs from '../../envs';

const {
  electron: {
    windows: { mainPath }
  }
} = envs;

export default {
  browserWindow: {
    width: 800,
    height: 600
  },
  baseUrl: mainPath
};
