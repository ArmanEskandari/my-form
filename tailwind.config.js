module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation:{
                'spin': 'spin 3s linear infinite'},
        },
    },
    variants: {
        opacity: ({ after }) => after(['disabled'])
    },
    plugins: [require('@tailwindcss/forms')],
}
