const siteUrl = "https://nakhll.com/";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: "*", disallow: ["/game", "/fp"] }],
        additionalSitemaps: [
            `${siteUrl}server-sitemap.xml`,
            `${siteUrl}sitemap.xml`,
        ],
    },
    exclude: ["/game"],
};