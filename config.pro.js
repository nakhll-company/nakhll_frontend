const { withSentryConfig } = require('@sentry/nextjs');
const moduleExports = {
    env: {
        BASE_URL: 'https://nakhll.com/',
        SENTRY_DSN: "https://8954613ad4f047de98d081a985dc5044@o489146.ingest.sentry.io/6094812"
    },
    images: {
        domains: ['nakhll.com', '3007'],
    },
    trailingSlash: true,
};
const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
