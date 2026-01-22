'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Flex,
  Center,
} from '@chakra-ui/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroData {
  personal: {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
  };
  hero: {
    greeting: string;
    description: string;
    primaryButton: { text: string; link: string };
    secondaryButton: { text: string; link: string };
  };
}

export default function Hero({ data }: { data: HeroData }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Box as="section" position="relative" minH="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden" pt={20} id="home">
      {/* Animated background orbs */}
      <Box
        position="absolute"
        inset={0}
        zIndex={-1}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={20}
          left={10}
          w={72}
          h={72}
          bg="purple.600"
          opacity={0.3}
          borderRadius="full"
          filter="blur(96px)"
          animation="pulse 2s infinite"
        />
        <Box
          position="absolute"
          bottom={20}
          right={10}
          w={72}
          h={72}
          bg="brand.600"
          opacity={0.3}
          borderRadius="full"
          filter="blur(96px)"
          animation="pulse 2s infinite 1s"
        />
      </Box>

      <Container maxW="5xl">
        <VStack
          spacing={8}
          textAlign="center"
          opacity={isLoaded ? 1 : 0}
          transform={isLoaded ? 'translateY(0)' : 'translateY(40px)'}
          transition="all 1s ease"
        >
          {/* Greeting */}
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="brand.400" fontWeight="semibold" animation="pulse 2s infinite">
            {data.hero.greeting}
          </Text>

          {/* Name */}
          <Heading
            size={{ base: '2xl', md: '4xl' }}
            bgGradient="linear(to-r, brand.400, accent.400)"
            bgClip="text"
            textColor="transparent"
          >
            {data.personal.name}
          </Heading>

          {/* Title */}
          <Heading size="lg" color="gray.300" fontWeight="300">
            {data.personal.title}
          </Heading>

          {/* Description */}
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" maxW="3xl" lineHeight={1.8}>
            {data.hero.description}
          </Text>

          {/* CTA Buttons */}
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Button
              as="a"
              href={data.hero.primaryButton.link}
              colorScheme="brand"
              size="lg"
              rightIcon={<ArrowRight size={20} />}
              _hover={{ transform: 'translateY(-2px)' }}
            >
              {data.hero.primaryButton.text}
            </Button>
            <Button
              as="a"
              href={data.hero.secondaryButton.link}
              variant="outline"
              size="lg"
              colorScheme="brand"
            >
              {data.hero.secondaryButton.text}
            </Button>
          </HStack>

          {/* Social Links */}
          <HStack spacing={6} justify="center" pt={4}>
            <Box
              as="a"
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              borderRadius="full"
              bg="gray.800"
              color="#ffffffff"
              _hover={{ bg: 'gray.700', transform: 'scale(1.1)' }}
              transition="all 0.3s"
            >
              <Github size={24} color="currentColor" />
            </Box>
            <Box
              as="a"
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              borderRadius="full"
              bg="gray.800"
              color="#0077b5"
              _hover={{ bg: 'gray.700', transform: 'scale(1.1)' }}
              transition="all 0.3s"
            >
              <Linkedin size={24} color="currentColor" />
            </Box>
            <Box
              as="a"
              href={`mailto:${data.personal.email}`}
              p={4}
              borderRadius="full"
              bg="gray.800"
              color="#ea4335"
              _hover={{ bg: 'gray.700', transform: 'scale(1.1)' }}
              transition="all 0.3s"
            >
              <Mail size={24} color="currentColor" />
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Scroll indicator */}
      <Center position="absolute" bottom={10} left="50%" transform="translateX(-50%)">
        <Box animation="bounce 2s infinite">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Box>
      </Center>
    </Box>
  );
}
