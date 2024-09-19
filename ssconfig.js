module.exports = {
  hooks: {
    parsers: {
      'json-parser': {
        pattern: /\.json$/,
        parser: ({ filePath, contents }) => {
          return JSON.parse(contents);
        },
      },
    },
  },
    source: ['tokens/**/*.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'sd',
        buildPath: 'css/',
        files: [
          {
            destination: '_variables.css',
            format: 'css/variables',
          },
        ],
      },
    },
  };
