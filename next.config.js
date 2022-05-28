/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*{/}?",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*"
          }
        ],
      },
    ];
  },
};
