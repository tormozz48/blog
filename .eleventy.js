const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);
  
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
  
  // Add URL filter for handling paths with the pathPrefix and making them absolute
  eleventyConfig.addFilter("url", function(url) {
    // Don't modify URLs that are already absolute
    if (url.startsWith('http')) {
      return url;
    }
    
    // Get site data
    const siteData = require('./src/_data/site.json');
    const baseUrl = siteData.url;
    
    // For root-relative URLs, make them absolute by prepending the site URL
    if (url.startsWith('/')) {
      // Remove the leading slash to avoid double slashes
      const cleanUrl = url.substring(1);
      return `${baseUrl}/${cleanUrl}`;
    }
    
    // For relative URLs, make them absolute as well
    return `${baseUrl}/${url}`;
  });
  
  // Add collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });
  
  // Add algorithms collection
  eleventyConfig.addCollection("algorithms", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/algorithms/*.md").sort((a, b) => {
      // Extract the number from the filename (e.g., 01_fixed_sliding_window.md -> 1)
      const numA = parseInt(a.fileSlug.split('_')[0]);
      const numB = parseInt(b.fileSlug.split('_')[0]);
      return numA - numB;
    });
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
    templateFormats: ["md", "njk", "html"],
    // Set pathPrefix to the repository name for GitHub Pages
    pathPrefix: "/blog/"
  };
};
