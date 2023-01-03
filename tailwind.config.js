/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "#0091D2",
            secondary: "#D7D700",
          },
        },
      },
      themes: [
        {
          name: "australianOpen",
          extend: {
            colors: {
              primary: "#0091D2",
              secondary: "#D7D700",
            },
          },
        },
        {
          name: "frenchOpen",
          extend: {
            colors: {
              primary: "#DD7233",
              secondary: "#006039",
            },
          },
        },
        {
          name: "usOpen",
          extend: {
            colors: {
              primary: "#00288C",
              secondary: "#FFD400",
            },
          },
        },
        {
          name: "wimbledon",
          extend: {
            colors: {
              primary: "#00703c",
              secondary: "#54008b",
            },
          },
        },
      ],
    }),
  ],
};
