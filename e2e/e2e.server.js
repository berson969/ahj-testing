const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devConfig= require('../webpack.dev');


const serverOptions = {
  contentBase: path.resolve(__dirname, 'dist')
};
const server = new WebpackDevServer({}, webpack(devConfig));

server.listen(8999, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
