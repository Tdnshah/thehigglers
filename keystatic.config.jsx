import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
   repo: {
     owner: 'tdnshah',
     name: 'thehigglers'
   }   
  },
  ui: {
    brand: { name: 'The Higglers Company | CMS' },
    mark: ({ colorScheme }) => {
      let path = colorScheme === 'dark'
        ? './public/asset/branding/black-hole.svg'
        : './public/asset/branding/black-hole.svg';
      
      return <img src={path} height={24} />
    },
  },
  collections: {
    posts: {
      label: 'Blogs',
      slugField: 'title',
      path: 'pages/blogs/*',
      format: { contentField: 'content' },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    },
  },
})