export const getPostMedia = (post) => {
  const coverItem = { type: 'image', src: post.cover };
  const rest = (post.media || []).filter((item) => item.src !== post.cover);
  return [coverItem, ...rest];
};

export const formatPostDate = (dateStr, language) =>
  new Date(dateStr).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const filterPosts = (posts, query, language) => {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter((post) => {
    const title = post.title[language]?.toLowerCase() || '';
    const description = post.description[language]?.toLowerCase() || '';
    return title.includes(q) || description.includes(q);
  });
};
