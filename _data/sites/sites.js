module.exports = {
  name: "sites",
  description: "Hein Htet Kyaw's B/Vlog",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "hhkspeedlify",
  options: {
    frequency: 369, // 369 minutes (6.15 hours)
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://hhk.my.id",
    "https://netlify.hhk.my.id",
    "https://speedlify.hhk.my.id",
    "https://stats.hhk.my.id",
  ],
};
