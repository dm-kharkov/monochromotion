/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
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
  transform: async (path) => {
    const isHomePage = path === '/'

    return {
      loc: path,
      changefreq: 'daily',
      priority: isHomePage ? 1.0 : 0.5,
      lastmod: new Date().toISOString()
    }
  }
}
