
 module.exports = {
  test: /\.(scss|sass|css|less)$/i,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'postcss-loader', options: { sourceMap: true } },
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true } },
    { loader: 'less-loader', options: { sourceMap: true } }
  ]
}