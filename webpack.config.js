const path = require( 'path' );
const webpack = require( 'webpack' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if ( process.env.NODE_ENV === 'test' ) {
  require( 'dotenv' ).config( { path: '.env.test' } );
} else if ( process.env.NODE_ENV === 'development') {
  require( 'dotenv' ).config( { path: '.env.development' } );
}

module.exports = ( env ) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join( __dirname, 'public' ),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [ !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },          
        ],
      }]
    },
    plugins: [
      new webpack.DefinePlugin( { 
        'process.env.FIREBASE_API_KEY': JSON.stringify( process.env.FIREBASE_API_KEY ),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify( process.env.FIREBASE_AUTH_DOMAIN ),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify( process.env.FIREBASE_DATABASE_URL ),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify( process.env.FIREBASE_PROJECT_ID ),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify( process.env.FIREBASE_STORAGE_BUCKET ),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify( process.env.FIREBASE_MESSAGING_SENDER_ID )
      } ),
      new MiniCssExtractPlugin( {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: !isProduction ? '[name].css' : '[name].[hash].css',
        // chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css',
        filename: 'styles.css',
        chunkFilename: '[id].css'
      } ),
      new OptimizeCssAssetsPlugin( {
        cssProcessor: require( 'cssnano' ),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        }
      } )
    ],
    // not sure if to use cheap-module-eval-source-map or inline-source-map. Can't get things working in dev server when using mini css and webpack 4.
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join( __dirname, 'public' ),
      historyApiFallback: true
    },
    mode: 'development'
  };
};
