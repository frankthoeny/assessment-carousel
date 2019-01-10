import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
const port = 8080;
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(port, 'localhost' , (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:' + port );
});
