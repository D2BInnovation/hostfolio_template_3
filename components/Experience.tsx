'use client';

import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  Flex,
} from '@chakra-ui/react';
import { Briefcase, Check } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceData {
  experience: ExperienceItem[];
}

export default function Experience({ data }: { data: ExperienceData }) {
  return (
    <Box as="section" id="experience" py={{ base: 20, md: 32 }} position="relative" overflow="hidden">
      <Container maxW="5xl">
        {/* Section title */}
        <VStack align="start" mb={16} spacing={4}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, brand.400, accent.400)"
            bgClip="text"
            color="transparent"
          >
            Work Experience
          </Heading>
          <Box h={1} w={20} bgGradient="linear(to-r, brand.400, accent.400)" borderRadius="full" />
        </VStack>

        {/* Timeline */}
        <VStack spacing={8} align="stretch">
          {data.experience.map((job) => (
            <Box
              key={job.id}
              position="relative"
              pl={{ base: 8, md: 12 }}
              borderLeft="2px solid"
              borderColor="brand.500"
              opacity={0.5}
              _hover={{ borderColor: 'brand.400', opacity: 1, transition: 'all 0.3s ease' }}
            >
              {/* Timeline dot */}
              <Box
                position="absolute"
                left={{ base: -4, md: -6 }}
                top={0}
                w={{ base: 8, md: 12 }}
                h={{ base: 8, md: 12 }}
                bg="gray.800"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid"
                borderColor="brand.600"
              >
                <Briefcase size={20} color="currentColor" />
              </Box>

              {/* Job card */}
              <Box
                bg="gray.800"
                p={{ base: 6, md: 8 }}
                borderRadius="lg"
                _hover={{ bg: 'gray.750', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                {/* Header */}
                <VStack align="start" mb={4} spacing={2}>
                  <Heading size="md" color="white">
                    {job.position}
                  </Heading>
                  <Text fontSize="lg" color="brand.400" fontWeight="semibold">
                    {job.company}
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    {job.duration} • {job.location}
                  </Text>
                </VStack>

                {/* Description */}
                <Text color="gray.300" mb={4} lineHeight={1.8}>
                  {job.description}
                </Text>

                {/* Achievements */}
                <VStack align="start" mb={4} spacing={2}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.200" textTransform="uppercase" letterSpacing="wide">
                    Key Achievements
                  </Text>
                  <List spacing={2}>
                    {job.achievements.map((achievement, idx) => (
                      <ListItem key={idx} color="gray.300" fontSize="sm">
                        <ListIcon as={Check} color="brand.400" mr={2} />
                        {achievement}
                      </ListItem>
                    ))}
                  </List>
                </VStack>

                {/* Technologies */}
                <Flex wrap="wrap" gap={2}>
                  {job.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      fontSize="xs"
                      px={3}
                      py={1}
                      bg="brand.500/20"
                      color="brand.300"
                      borderRadius="full"
                      border="1px solid"
                      borderColor="brand.500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
