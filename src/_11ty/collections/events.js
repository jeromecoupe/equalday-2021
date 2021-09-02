const { DateTime } = require("luxon");

module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/events/*.md")
    .sort((a, b) => {
      let dateA = new Date(a.data.startDate);
      let dateB = new Date(b.data.startDate);
      if (dateA > dateB) return 1;
      if (dateA < dateB) return -1;
      return 0;
    });
};
