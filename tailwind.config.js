module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBarBMS:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        premierBMS:{
          800:'#2b3148'
        },
        commonPink:{
          100:'#f84464',
          200:'#df4d6c',
          300:'#fff9e3',//yellow
          400:'#222539',//dark nav blue
          500:'#313035',//footer dark black 
          600:'#404043',//footer light black
          700:'#7f7f7f',//footer small text 
          800:'#4f4745', //footer large text
        },
      },
    },
  },
  plugins: [],
}