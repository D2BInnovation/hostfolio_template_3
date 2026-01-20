'use client';

import {
  Box,
  Container,
  Heading,
  VStack,
  Grid,
  HStack,
  Text,
  Badge,
  Button,
  Link,
  Flex,
} from '@chakra-ui/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

interface ProjectsData {
  projects: Project[];
}

export default function Projects({ data }: { data: ProjectsData }) {
  const featuredProjects = data.projects.filter((p) => p.featured);
  const otherProjects = data.projects.filter((p) => !p.featured);

  return (
    <Box as="section" id="projects" py={{ base: 20, md: 32 }} position="relative" overflow="hidden">
      <Container maxW="5xl">
        {/* Section title */}
        <VStack align="start" mb={16} spacing={4}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, brand.400, accent.400)"
            bgClip="text"
            textColor="transparent"
          >
            Featured Projects
          </Heading>
          <Box h={1} w={20} bgGradient="linear(to-r, brand.400, accent.400)" borderRadius="full" />
        </VStack>

        {/* Featured Projects */}
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} mb={16}>
          {featuredProjects.map((project) => (
            <Box
              key={project.id}
              bg="gray.800"
              borderRadius="xl"
              overflow="hidden"
              _hover={{ bg: 'gray.750', boxShadow: '0 20px 25px -5px rgba(139, 92, 246, 0.2)', transition: 'all 0.3s' }}
            >
              {/* Image placeholder */}
              <Box
                h={48}
                bgGradient="linear(to-br, brand.600/20, accent.600/20)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-br, brand.500/10, accent.500/10)"
                  _hover={{ bgGradient: 'linear(to-br, brand.500/20, accent.500/20)' }}
                  transition="all 0.3s"
                />
                <Text color="gray.400" fontWeight="semibold" textAlign="center" px={4}>
                  {project.title}
                </Text>
              </Box>

              {/* Content */}
              <VStack p={6} spacing={4} align="start">
                <Heading size="md" color="white" _hover={{ color: 'brand.300' }}>
                  {project.title}
                </Heading>

                <Text fontSize="sm" color="gray.300" lineHeight={1.6}>
                  {project.description}
                </Text>

                {/* Technologies */}
                <Flex wrap="wrap" gap={2}>
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      fontSize="xs"
                      bg="brand.500/20"
                      color="brand.300"
                      px={2}
                      py={1}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="brand.500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>

                {/* Links */}
                <HStack spacing={3} pt={4}>
                  <Button
                    as={Link}
                    href={project.githubUrl}
                    isExternal
                    size="sm"
                    bg="gray.700"
                    color="gray.300"
                    _hover={{ color: 'white', bg: 'gray.600' }}
                    leftIcon={<Github size={16} />}
                  >
                    Code
                  </Button>
                  <Button
                    as={Link}
                    href={project.liveUrl}
                    isExternal
                    size="sm"
                    bg="gray.700"
                    color="gray.300"
                    _hover={{ color: 'white', bg: 'gray.600' }}
                    leftIcon={<ExternalLink size={16} />}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Box>
          ))}
        </Grid>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <VStack align="start" spacing={8}>
            <Heading size="md" color="white">
              Other Projects
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} w="full">
              {otherProjects.map((project) => (
                <Box
                  key={project.id}
                  bg="gray.800"
                  p={6}
                  borderRadius="lg"
                  _hover={{ bg: 'gray.750', boxShadow: 'md', transition: 'all 0.3s' }}
                >
                  <Heading size="sm" color="white" mb={3}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.400" mb={4} lineHeight={1.6}>
                    {project.description}
                  </Text>

                  <Flex wrap="wrap" gap={2} mb={4}>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} fontSize="xs" bg="brand.500/20" color="brand.300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Text fontSize="xs" color="gray.400">
                        +{project.technologies.length - 3} more
                      </Text>
                    )}
                  </Flex>

                  <HStack spacing={3}>
                    <Link href={project.githubUrl} isExternal color="brand.400" fontSize="sm" fontWeight="semibold">
                      GitHub →
                    </Link>
                    <Link href={project.liveUrl} isExternal color="brand.400" fontSize="sm" fontWeight="semibold">
                      Live →
                    </Link>
                  </HStack>
                </Box>
              ))}
            </Grid>
          </VStack>
        )}
      </Container>
    </Box>
  );
}
