module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/speakers/*.md")
    .sort((a, b) => b.data.surname.localeCompare(a.data.surname))
    .reverse();
};
