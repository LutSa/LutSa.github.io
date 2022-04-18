module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost:9000']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
