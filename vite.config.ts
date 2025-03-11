import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(() => {

  return {
    resolve: {
      alias: {
        '@godotjs': path.resolve(
          __dirname,
          './godotjs/index.ts'
        ),
      },
    },
  };
});
