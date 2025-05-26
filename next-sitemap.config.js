/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://monochromotion.vercel.app/',
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/dashboard']
      }
    ]
  },
  transform: async (_, url) => {
    return {
      loc: url,
      changefreq: 'daily',
      priority: url === '/' ? 1.0 : 0.5,
      lastmod: new Date().toISOString()
    }
  }
}
