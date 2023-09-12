  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      container: {
        center: true,
      },
      extend: {
        fontFamily: {
          "MorabbaB": "Morabba Bold",
          "MorabbaM": "Morabba medium",
          "MorabbaL": "Morabba light",
          "dana": "dana",
          "danaB": "dana bold",
          "danaM": "dana medium",
        },
        colors: {
          'bg-Glass': 'rgba(225, 225, 225, .5)'
        }
      },
    },
    plugins: [],
  }
  
  