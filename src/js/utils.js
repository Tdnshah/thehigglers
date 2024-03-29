export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: "UTC",
    })
  }
  
  export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}) {
  
    const filteredPosts = posts.reduce((acc, post) => {
      const { date, draft } = post.frontmatter;
      // filterOutDrafts if true
      if (filterOutDrafts && draft) return acc;
  
      // filterOutFuturePosts if true
      if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
  
      // add post to acc
      acc.push(post)
  
      return acc;
    }, [])
  
    // sortByDate or randomize
    if (sortByDate) {
      filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
      filteredPosts.sort(() => Math.random() - 0.5)
    }
  
    // limit if number is passed
    if (typeof limit === "number") {
      return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
  
  }

export function formatCaptalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

export function limitString (string = '', limit = 0) {  
  return string.substring(0, limit)
}

//Get Read time

export function getReadingTime(content) {
  const WORDS_PER_MINUTE = 200;
  if (!content) return;
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
  const numberOfWords = clean.split(/\s/g).length;
  return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}