import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function get(context) { 
  const postImportResult = import.meta.glob('./blogs/*.{md,mdx}', { eager: true }); 
  const posts = Object.values(postImportResult);
  let publishedPost = posts.filter(el => el.frontmatter.status === 'published')
  return rss ({
    title: 'Thehigglers Company Blogs Rss Feeds',
    description: 'Thehigglers Company is a web agency helping enterprises build there online presence.',
    site: context.site,
    items: publishedPost.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
      content: sanitizeHtml(post.compiledContent())
    })),
  })
};
