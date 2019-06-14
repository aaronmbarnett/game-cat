export default (games, { text, sortBy }) => {
  return games
    .filter((game) => {
      const textMatch = game.title.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title < b.title ? -1 : 1;
      } else if (sortBy === 'title-desc') {
        return a.title < b.title ? 1 : -1;
      } else if (sortBy === 'platform-asc') {
        return a.platform < b.platform ? -1 : 1;
      } else if (sortBy === 'platform-desc') {
        return a.platform < b.platform ? 1 : -1;
      } else if (sortBy === 'release-desc') {
        return a.release < b.release ? 1 : -1;
      } else if (sortBy === 'release-asc') {
        return a.release < b.release ? -1 : 1;
      }
    });
};
