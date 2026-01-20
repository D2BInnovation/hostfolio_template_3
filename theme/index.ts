import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';
import { components } from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        transition: 'background-color 0.3s, color 0.3s',
      },
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },
});

export default theme;
