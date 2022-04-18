module.exports = {
  ci: {
    collect: {
      staticDistDir: './my-blog-starter/public',
      url: ['http://localhost:9000']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
