import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function get(context) { 
  const postImportResult = import.meta.glob('./blogs/*.{md,mdx}', { eager: true }); 
  const posts = Object.values(postImportResult);
  let publishedPost = posts.filter(el => el.frontmatter.status === 'published');
  publishedPost = publishedPost.filter(el => el.frontmatter.tags.includes('drupal-planet'))
  return rss ({
    title: 'Thehigglers Company Blogs Rss Feeds for Drupal Planet.',
    description: 'Thehigglers Company is a web agency helping enterprises build there online presence.',
    site: context.site,
    customData: "<webMaster>tejas.shah@thehigglers.com (Tejas Shah)</webMaster><copyright>Copyright © 2023 Thehigglers Company. All Rights Reserved.</copyright>",
    items: publishedPost.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
      customData: "<author>tejas.shah@thehigglers.com (Tejas Shah)</author>"
    })),
  })
};