// docusaurus.config.js
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics AI',
  tagline: 'Hackathon Project',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YourName', // Usually your GitHub org/user
  projectName: 'Humanoid-Robotics-book-AI', // Usually your repo name

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'textbook/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YourName/Humanoid-Robotics-book-AI/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;