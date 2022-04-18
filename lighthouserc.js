module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
