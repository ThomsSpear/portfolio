module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',  // Chemins vers tous les fichiers Svelte
    './node_modules/flowbite/**/*.js'   // Chemins vers Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')  // Active le plugin Flowbite
  ]
};
