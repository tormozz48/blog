module.exports = function(eleventyConfig) {
  // Copy assets directory
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add date formatting filters
  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString().split('T')[0];
  });
  
  eleventyConfig.addFilter("dateReadable", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Add collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });
  
  // Create tag collections
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags.filter(tag => tag !== "posts").forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet].sort();
  });
  
  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Use .html as template engine for markdown files
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
