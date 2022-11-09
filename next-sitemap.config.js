/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.cryptoxchange.es/',
    generateRobotsTxt: true,
    sitemapSize: 100,
}