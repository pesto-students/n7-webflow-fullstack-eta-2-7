import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#c4c0d7',
      200: '#9d96be',
      300: '#756ca5',
      400: '#4e428b',
      500: '#3b2d80',
      600: '#352872',
      700: '#2f2465',
      800: '#291f58',
      900: '#231b4b',
    },
  },
  fonts: {
    body: "'Work Sans', sans-serif",
    heading: "'Work Sans', sans-serif",
  },
},
withDefaultColorScheme({
  colorScheme: 'brand',
  components: ['Button'],
}));

export default theme;
