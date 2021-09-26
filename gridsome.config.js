// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '铁科经纬（西安）信息科技有限公司',
  // siteUrl: 'http://localhost:8080/',
  pathPrefix: '/xian',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "Post",
      }
    }
  ]
}