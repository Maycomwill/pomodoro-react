/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,html,js}'],
  theme: {
    extend: {
      colors: {
        pomodoro: {
          100: '#ffd0c8',
          200: '#ffb1a3',
          300: '#ff927e',
          400: '#ff826c',
          500: '#ff6347',
          600: '#e65940',
          700: '#b34532',
          800: '#993b2b',
          900: '#803224'
        },
        complementary: {
          100: '#d2f5f9',
          200: '#bceff6',
          300: '#8fe5f0',
          400: '#62dbea',
          500: '#1ecbe1',
          600: '#1bb7cb',
          700: '#18a2b4',
          800: '#158e9e',
          900: '#0f6671'
        },
        gray: {
          900: '#212121',
          800: '#424242',
          700: '#616161',
          600: '#757575',
          500: '#959595',
          400: '#bdbdbd',
          200: '#eeeeee',
          100: '#f5f5f5'
        },
        maingreen: '#acf100',
        mainblue: '#0200A2'
      },

      backgroundImage: {
        pomodoroPattern: "url('./pomodoro.jpg')",
        phonePattern: "url('./phone.jpg')"
      }
    }
  },
  plugins: []
}
