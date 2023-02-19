const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "react-github-btn",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    optimizeImages: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentication/sign-in/basic",
        permanent: true,
      },
    ];
  },
});
