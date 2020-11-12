module.exports = {
  title: 'SEE-GRID Certification Authority',
  tagline: 'SEE-GRID CA provides Catch-All PKI services to organizations collaborating with GRNET and the European Grid Initiative.',
  url: 'https://see-grid-ca.hellasgrid.gr',
  baseUrl: '/',
//  baseUrl: 'see-grid-ca.hellasgrid.gr',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'GRNET', // Usually your GitHub org/user name.
  projectName: 'see-grid-ca.hellasgrid.gr', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'GRNET',
        src: 'img/grnet-logo2.png',
      },
      items: [
        {
          to: 'documents/about',
          label: 'About',
          position: 'left',
        },
        {
          to: 'documents/',
          activeBasePath: 'documents',
          label: 'Documentation',
          position: 'left',
        },

        {
          href: 'https://github.com/hellasgrid/see-grid-ca.hellasgrid.gr',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Trust Anchors',
              href: 'https://snf-16528.ok-kno.grnetcloud.net/documents/about#trust-anchors',
            },
            {
              label: 'SEE-GRID CA',
              href: 'https://snf-16528.ok-kno.grnetcloud.net/documents/about#see-grid-ca',
            },
//            {
//              label: 'Second Doc',
//              to: 'docs/doc2/',
//            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Certificate Policy and Certification Practice Statement (CP/CPS)',
              href: 'https://snf-16528.ok-kno.grnetcloud.net/documents/about#certificate-policy-and-certification-practice-statement-cpcps',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Registration Authorities',
              href: 'https://snf-16528.ok-kno.grnetcloud.net/documents/about#registration-authorities',
            },
          ],
        },
      ],
//      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://grnet.gr/">GRNET</a> <br /> Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.`,
//      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://www.grnet.gr/"> <img alt="grnet" src="img/grnet-logo1.png"> </a> <br /> Built with Docusaurus.`,
      copyright: `<img alt="grnet" src="img/grnet-logo2.png" height="50px"> </a> <br /> Copyright © ${new Date().getFullYear()} <a href="http://www.grnet.gr/"> GRNET </a> <br /> Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/documents/',
          path: 'documents',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
//          editUrl:
//            'https://github.com/hellasgrid/see-grid-ca.hellasgrid.gr',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
