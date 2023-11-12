// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: ['@dave/eslint-config-myconfig', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': [
      'error',
      {
        cssFiles: ['src/style.css'],
        callees: ['clsx', 'cva'],
        whitelist: [
          'h-header-bar',
          'w-navigation-bar',
          'pt-header-bar',
          'pl-navigation-bar',
          'wrapper-box',
        ],
      },
    ],
  },
}
