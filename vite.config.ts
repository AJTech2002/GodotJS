import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(() => {

  return {
    resolve: {
      alias: {
        '@unityjs': path.resolve(
          __dirname,
          './unityjs/index.ts'
        ),
      },
    },
  };
});
