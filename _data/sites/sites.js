module.exports = {
  name: "sites",
  description: "Hein Htet Kyaw's V/Blog",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "hhkspeedlify",
  options: {
    frequency: 60 * 23, // 24 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://hhk.my.id/",
    "https://speedlify.hhk.my.id/",
    "https://stats.hhk.my.id/",
    "https://www.ksvblog.site",
    "https://ksvblog.pages.dev",
    "https://ksvblog.netlify.app",
    "https://ksvblog.github.io",
  ],
};
