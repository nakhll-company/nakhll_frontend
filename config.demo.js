module.exports = {
    async redirects() {
        return [{
                source: "/",
                destination: "/update",
                permanent: false,
            },
            {
                source: "/404",
                destination: "/update",
                permanent: false,
            },
            {
                source: "/fp/:slug*",
                destination: "/update",
                permanent: false,
            },
            {
                source: "/search/:slug*",
                destination: "/update",
                permanent: false,
            },
            {
                source: "/login/:slug*",
                destination: "/update",
                permanent: false,
            },
            {
                source: "/shop/:slug*",
                destination: "/update",
                permanent: false,
            },
        ];
    },
    i18n: {
        locales: ["fa"],
        defaultLocale: "fa",
    },
    env: {
        BASE_URL: "http://51.89.107.174:8000/",
    },
    images: {
        domains: ["nakhll.com", "3007", "localhost"],
    },
    trailingSlash: true,
    reactStrictMode: true,
};