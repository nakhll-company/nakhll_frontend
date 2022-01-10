module.exports = {
    siteUrl: 'https://nakhll.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: "*", disallow: ["/fp"] }],
        additionalSitemaps: [
            'https://nakhll.com/server-sitemap.xml',
            'https://nakhll.com/sitemap.xml',
        ]
    }
};