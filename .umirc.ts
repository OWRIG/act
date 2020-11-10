import { defineConfig } from 'dumi';

export default defineConfig({
  title: '熔火工坊活动',
  favicon: 'https://www.owmod.net/favicon.ico',
  logo: 'https://img.alicdn.com/tfs/TB1RCBLoz39YK4jSZPcXXXrUFXa-853-954.png',
  outputPath: 'dist',
  history: {
    type: 'hash'
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM'
  },
  scripts: [
    'https://g.alicdn.com/code/lib/??react/16.13.1/umd/react.production.min.js,react-dom/16.13.1/umd/react-dom.production.min.js'
  ],
});
