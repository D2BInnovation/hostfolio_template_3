'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Link,
  Button,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { Menu, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  data: any;
}

export default function Navbar({ data }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      position="sticky"
      top="0"
      zIndex={1000}
      bg={scrolled ? (colorMode === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent'}
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
    >
      <Container maxW="5xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="#home" _hover={{ textDecoration: 'none' }}>
            <Box
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.400, accent.400)"
              bgClip="text"
              textColor="transparent"
            >
              {data?.personal?.name?.split(' ')[0]}
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Flex gap={6} align="center" display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontSize="sm"
                color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                _hover={{ color: 'brand.400', transition: 'color 0.3s ease' }}
              >
                {item.label}
              </Link>
            ))}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
            />
            {data?.personal?.resume && (
              <Button
                as="a"
                href={data.personal.resume}
                target="_blank"
                size="sm"
                colorScheme="brand"
              >
                Resume
              </Button>
            )}
          </Flex>

          {/* Mobile Menu */}
          <Flex gap={2} display={{ base: 'flex', md: 'none' }} align="center">
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
            />
            <IconButton
              aria-label="Open menu"
              icon={<Menu size={20} />}
              onClick={onOpen}
              variant="ghost"
              size="sm"
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  fontSize="lg"
                  onClick={onClose}
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}
                  _hover={{ color: 'brand.400' }}
                >
                  {item.label}
                </Link>
              ))}
              {data?.personal?.resume && (
                <Button
                  as="a"
                  href={data.personal.resume}
                  target="_blank"
                  width="full"
                  colorScheme="brand"
                  mt={4}
                >
                  Resume
                </Button>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
