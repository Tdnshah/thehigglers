import rss from '@astrojs/rss';
import { formatBlogPosts } from "../js/utils";


const unformattedBlogs = import.meta.glob('./blogs/*.md', {eager:true});
const blogs = formatBlogPosts(Object.values(unformattedBlogs));

export const get = () => rss({
  title: 'Thehigglers Company Blogs Rss Feeds',
  description: 'Thehigglers Company is a web agency helping enterprises build there online presence.',
  site: import.meta.env.SITE,
  items: blogs.map((blog) => ({
    link: blog.url,
    title: blog.frontmatter.title,
    pubDate: blog.frontmatter.date,
    description: blog.frontmatter.description,
  }))
});