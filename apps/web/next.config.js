const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = (phase) =>
  withTM({
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/docs/:match*",
          destination:
            phase === PHASE_DEVELOPMENT_SERVER
              ? "http://localhost:3001/docs/:match*"
              : "https://teste-turbo-docs.vercel.app/docs/:match*",
        },
      ];
    },
  });
