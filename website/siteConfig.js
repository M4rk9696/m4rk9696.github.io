const siteConfig = {
  title: 'Mind-Slice',
  tagline: 'An unsettling mind in an endless search for inspiration',
  url: 'https://m4rk9696.github.io',
  baseUrl: '/mind-slice/',
  projectName: 'mind-slice',
  organizationName: 'm4rk9696',
  headerLinks: [
    // {page: 'codeArt', label: 'Code Art'},
    // {page: 'projects', label: 'Projects'},
    {blog: true, label: 'Tech Blog'},
  ],
  // headerIcon: 'img/header.svg',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#6c63ff',
    secondaryColor: '#205C3B',
  },
  fonts: {
    myFont: [
      'Futura',
      'Helvetica',
      'sans-serif'
    ],
  },
  copyright: `Copyright © ${new Date().getFullYear()} Nimalan`,
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true
};

module.exports = siteConfig;
