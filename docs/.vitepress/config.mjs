import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({ 
  title: "Meditations",
  description: "A Personal Inspiration Site",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/intro', activeMatch: '/intro/' },
      { text: 'Article', link: '/article/1', activeMatch: '/article/' }
    ],

    logo: '/logo-mini.png',

    sidebar: {
      '/intro/': [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Meditations?', link: '/intro/intro' },
          { text: 'What is Stoicism?', link: '/intro/stoicism' },
          { text: 'Why I Made This Website?', link: '/intro/reason' }
        ]
      }
    ],
    '/article/': [
      {
        text: 'Article',
        items: [
          { text: 'Titlepage', link: '/article/title' },
          { text: 'Book 1', link: '/article/1' },
          { text: 'Book 2', link: '/article/2' },
          { text: 'Book 3', link: '/article/3' },
          { text: 'Book 4', link: '/article/4' },
          { text: 'Book 5', link: '/article/5' },
          { text: 'Book 6', link: '/article/6' },
          { text: 'Book 7', link: '/article/7' },
          { text: 'Book 8', link: '/article/8' },
          { text: 'Book 9', link: '/article/9' },
          { text: 'Book 10', link: '/article/10' },
          { text: 'Book 11', link: '/article/11' },
          { text: 'Book 12', link: '/article/12' },
          { text: 'Uncopyright', link: '/article/epilogue' }
        ]
      }
    ]
  }, 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KaisuuD' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright© 2024-present Kaisuu D'
  }
  }
})
