import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { noto: "'Noto Sans', sans-serif" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode !== "light" ? "#EDEDED" : "black",
      },
    }),
  },
  colors: {
    black: "#000000",
    green: "#43e2a9",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts,
  breakpoints,
  components: {
    Text: {
      baseStyle: {
        color: "#000000",
      },
    },
  },
});

export default theme;
