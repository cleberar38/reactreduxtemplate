import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {

    rules: [
     // rules for modules (configure loaders, parser options, etc.)

     {
       test: /\.jsx?$/,
       include: [
         path.resolve(__dirname, 'src')
       ],
       exclude: [
         /node_modules/
       ],

       loader: "babel-loader",
     },
     {test: /(\.css)$/, loaders: ['style', 'css']},
     {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
     {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
     {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
     {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}

   ]

  }
};
