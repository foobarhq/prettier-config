module.exports = {
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.html', '*.htm', '*.svg'],
      options: {
        parser: 'html'
      }
    },
  ]
};
