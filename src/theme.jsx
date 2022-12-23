import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito-sans";

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Sans', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
});

export default theme;