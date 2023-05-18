/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            colors: {
                cyan: 'hsl(180, 66%, 49%)',
                cyanLight: 'hsl(257, 27%, 26%)',
                darkViolet: 'hsl(0, 87%, 67%)',
                red: 'hsl(0, 87%, 67%)',
                grayishViolet: 'hsl(257, 7%, 63%)',
                veryDarkBlue: 'hsl(255, 11%, 22%)',
                veryDarkViolet: 'hsl(260, 8%, 14%)'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            spacing: {
                180: '32rem'
            },
            backgroundImage: {
                'bg-boost-desktop': "url('images/bg-boost-desktop.svg')",
                'bg-boost-mobile': "url('images/bg-boost-mobile.svg)"
            }
        }
    },
    plugins: []
}
