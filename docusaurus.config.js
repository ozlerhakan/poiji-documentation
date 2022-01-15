// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Poiji Documentation',
  tagline: 'A powerful library converting excel rows to a list of Java objects based on Apache POI',
  url: 'https://ozlerhakan.github.io/',
  favicon: 'https://github.githubassets.com/favicons/favicon-dark.png',
  baseUrl: '/poiji/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'ozlerhakan.github.io',
  projectName: 'poiji', 
  deploymentBranch: 'docs',
  staticDirectories: ['public', 'static'], 
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ozlerhakan/poiji-documentation/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ozlerhakan/poiji-documentation/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Poiji',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/ozlerhakan/poiji',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=poiji',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/ozlerhakan/poiji/discussions',
              },
              {
                label: 'GitHub Issue Tracker',
                href: 'https://github.com/ozlerhakan/poiji/issues',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ozlerhakan/poiji',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Poiji Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
