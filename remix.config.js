/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  server: "./server.js",
  serverBuildTarget: "netlify",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
};
