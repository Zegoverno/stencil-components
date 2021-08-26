import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind-plugin'
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'zen-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    tailwind(),
    postcss({
      plugins: [
        autoprefixer(),
      ]
    })
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};
