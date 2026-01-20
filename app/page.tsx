'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Text, VStack, Spinner, Center, useColorMode } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  hero: {
    greeting: string;
    description: string;
    primaryButton: { text: string; link: string };
    secondaryButton: { text: string; link: string };
  };
  about: {
    description: string[];
    skills: string[];
  };
  experience: Array<{
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    image: string;
    featured: boolean;
  }>;
  contact: {
    title: string;
    description: string;
    socialLinks: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
}

export default function Home() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const { colorMode } = useColorMode();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Failed to load portfolio data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Center minH="100vh" bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
        <VStack spacing={4}>
          <Spinner size="lg" color="brand.400" thickness="4px" />
          <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>Loading portfolio...</Text>
        </VStack>
      </Center>
    );
  }

  if (!data) {
    return (
      <Center minH="100vh" bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
        <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>Failed to load portfolio data</Text>
      </Center>
    );
  }

  return (
    <Box as="main" bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'} color={colorMode === 'dark' ? 'gray.50' : 'gray.900'}>
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Contact data={data} />

      {/* Footer */}
      <Box as="footer" borderTopWidth={1} borderTopColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'} bg={colorMode === 'dark' ? 'gray.800/50' : 'gray.100/50'} py={12}>
        <Container maxW="5xl" textAlign="center">
          <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
            © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
