module.exports = function(eleventyConfig) {

    // Výchozí výstupní složka: _site
  
    // Zkopírovat images/ a favicon/ do _site/images a _site/favicon
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("favicon");
    eleventyConfig.addPassthroughCopy("articles");
  
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
  
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md", "liquid"],
  
      // jako šablonovací jazyk zvolíme Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  
  };
  