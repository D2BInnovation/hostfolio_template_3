'use client';

import { Box, Container, Grid, Heading, Text, VStack, Flex, Badge } from '@chakra-ui/react';

interface AboutData {
  about: {
    description: string[];
    skills: string[];
  };
}

export default function About({ data }: { data: AboutData }) {
  return (
    <Box as="section" id="about" py={{ base: 20, md: 32 }} position="relative" overflow="hidden">
      <Container maxW="5xl">
        {/* Section title */}
        <VStack align="start" mb={16} spacing={4}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, brand.400, accent.400)"
            bgClip="text"
            textColor="transparent"
          >
            About Me
          </Heading>
          <Box h={1} w={20} bgGradient="linear(to-r, brand.400, accent.400)" borderRadius="full" />
        </VStack>

        {/* About content */}
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} alignItems="center">
          {/* Text content */}
          <VStack spacing={6} align="start">
            {data.about.description.map((paragraph, index) => (
              <Text
                key={index}
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.300"
                lineHeight={1.8}
                _hover={{ color: 'gray.100', transition: 'color 0.3s ease' }}
              >
                {paragraph}
              </Text>
            ))}
          </VStack>

          {/* Skills grid */}
          <VStack align="start" spacing={8}>
            <Heading size="md" color="white">
              Skills & Technologies
            </Heading>
            <Flex wrap="wrap" gap={3}>
              {data.about.skills.map((skill, index) => (
                <Badge
                  key={index}
                  px={4}
                  py={3}
                  borderRadius="lg"
                  bg="gray.800"
                  color="gray.200"
                  cursor="default"
                  _hover={{ bg: 'gray.700', transform: 'scale(1.05)', transition: 'all 0.3s' }}
                  textAlign="center"
                  fontSize="sm"
                >
                  {skill}
                </Badge>
              ))}
            </Flex>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
