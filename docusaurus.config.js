// docusaurus.config.js
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics AI',
  tagline: 'Hackathon Project',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'SUMAIRA-SHAIKH',
  projectName: 'Humanoid-Robotics-book-AI',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'textbook/docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SUMAIRA-SHAIKH/Humanoid-Robotics-book-AI/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
};

module.exports = config;

