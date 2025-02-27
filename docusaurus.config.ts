import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faGithub } = require('@fortawesome/free-brands-svg-icons');

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/d-docs', // 上傳github

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vernachentw', // Usually your GitHub org/user name.
  projectName: 'd-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tw',
    locales: ['tw', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        path: 'en',
      },
      tw: {
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'tw',
        path: 'tw',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0.0',
              // path: '1.0.0', // 有這個會顯示在url
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        indexBlog: false,
        // explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/brand_gips.svg',

    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/brand_gips.svg',
        // href: '/',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },

        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'https://www.gips.com.tw/',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-home',
          'aria-label': 'Home',
          target: '_blank',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
