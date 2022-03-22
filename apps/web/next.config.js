const { DOCS_URL } = process.env;

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:match*",
        destination: `${DOCS_URL}/docs/:match*`,
      },
    ];
  },
});
