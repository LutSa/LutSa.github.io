module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['https://lutsa.github.io/']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
