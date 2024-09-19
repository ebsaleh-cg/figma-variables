module.exports = {
    parsers: [{
        pattern: /\.json$/,
        parse: ({ filePath, contents }) => {
          return JSON.parse(contents);
        }
      }],
    source: ['tokens/**/*.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'sd',
        buildPath: 'tokens/',
        files: [
          {
            destination: '_variables.css',
            format: 'css/variables',
          },
        ],
      },
    },
  };