module.exports = {
  name: "ksvblog.site", // optional, falls back to object key
  description: "K's V/Blog Sites",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.ksvblog.site",
    "https://ksvblog.pages.dev",
    "https://ksvblog.netlify.app",
    "https://ksvblog.github.io",
  ],
};
