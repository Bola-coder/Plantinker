import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const breakpoints = {
  sm: "320px",
  md: "769px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const colors = {
  plantinker: {
    100: "#f3e7e9", //lightest purple
    300: "#e4c1f9", //light purple
    500: "#473B59", //purple
    // 800: "#03045e",
  },
};

const fonts = {
  body: ["Montserrat", "Poppins", "sans-serif"],
  heading: ["Montserrat", "Poppins", "sans-serif"],
};
const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  components: {
    Button: {
      baseStyle: {
        _hover: {
          // Apply the opacity change on hover
          // bg: "carland.100", // Change this to the color you want on hover
          opacity: 0.9, // Adjust the opacity value as desired
        },
      },
    },
  },
  global: {
    a: {
      _hover: {
        color: "#473B59", // Change this to the desired color for hover
      },
      "&[aria-current='page']": {
        color: "white", // Change this to the desired color for active links
      },
    },
  },
});

export default theme;
