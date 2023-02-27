import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function get(context) { 
  return rss ({
    title: 'Thehigglers Company Blogs Rss Feeds',
    description: 'Thehigglers Company is a web agency helping enterprises build there online presence.',
    site: context.site,
    items: await pagesGlobToRssItems (
      import.meta.glob('./blogs/*.{md,mdx}')
    ) 
  })
};
