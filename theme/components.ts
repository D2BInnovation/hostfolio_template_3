import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandButton = defineStyle({
  bg: 'brand.600',
  color: 'white',
  _hover: {
    bg: 'brand.700',
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  _active: {
    bg: 'brand.800',
  },
  transition: 'all 0.3s ease',
});

const outlineButton = defineStyle({
  borderColor: 'brand.600',
  color: 'brand.400',
  _hover: {
    bg: 'brand.600',
    color: 'white',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
});

export const components = {
  Button: defineStyleConfig({
    variants: {
      brand: brandButton,
      outline: outlineButton,
    },
    defaultProps: {
      variant: 'brand',
    },
  }),
  Card: {
    baseStyle: {
      bg: 'gray.800',
      borderRadius: 'lg',
      boxShadow: 'md',
      transition: 'all 0.3s ease',
      _hover: {
        boxShadow: 'lg',
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
  },
};
