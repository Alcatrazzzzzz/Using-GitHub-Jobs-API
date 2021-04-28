// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://jobs.github.com/:path*",
      },
    ];
  },
};
