module.exports = {
  stories: ['../src/**/*.story.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: { reactDocgen: 'react-docgen' },
}
