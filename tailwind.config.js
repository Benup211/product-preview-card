/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mentor-anchor-color':'hsl(228, 45%, 44%)',
        'mentor-dark-cyan':'hsl(158, 36%, 37%)',
        'mentor-dark-hover-cyan':'hsl(158, 36%, 17%)',
        'mentor-cream':'hsl(30, 38%, 92%)',
        'mentor-very-dark-blue':'hsl(212, 21%, 14%)',
        'mentor-dark-grayish-blue':'hsl(228, 12%, 48%)',
        'mentor-white':'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        montserrat:['montserrat','sans-serif'],
         fraunces:['Fraunces', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

