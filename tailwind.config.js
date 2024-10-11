const config = {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

    plugins: [require('flowbite/plugin')],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#f2f7f4',
                    '100': '#e1eae3',
                    '200': '#c4d6ca',
                    '300': '#9cb9a7',
                    '400': '#709780',
                    '500': '#486d58',
                    '600': '#3c5f4c',
                    '700': '#304c3d',
                    '800': '#283d32',
                    '900': '#21332a',
                    '950': '#121c18',
                }
            }
        },
    }
};

module.exports = config;