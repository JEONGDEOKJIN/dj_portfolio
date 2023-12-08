/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        
        "./node_modules/flowbite/**/*.js"
    ],
    
    theme: {
        theme: {
            listStyleType: {
                none: 'none',
                disc: 'disc',
                decimal: 'decimal',
                square: 'square',
                roman: 'upper-roman',
            },
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
