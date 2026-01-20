'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

interface ContactData {
  personal: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
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

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={24} />,
  github: <Github size={24} />,
  twitter: <Twitter size={24} />,
  email: <Mail size={24} />,
};

export default function Contact({ data }: { data: ContactData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const ContactInfoCard = ({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) => (
    <Box bg="gray.800" p={6} borderRadius="lg" _hover={{ bg: 'gray.750', transition: 'all 0.3s' }}>
      <HStack spacing={4} align="start">
        <Box p={3} bg="gray.700" borderRadius="lg" color="brand.400">
          {icon}
        </Box>
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold" color="white" fontSize="lg">
            {title}
          </Text>
          <Link href={href} color="gray.300" _hover={{ color: 'brand.400', transition: 'color 0.3s' }}>
            {value}
          </Link>
        </VStack>
      </HStack>
    </Box>
  );

  return (
    <Box as="section" id="contact" py={{ base: 20, md: 32 }} position="relative" overflow="hidden">
      <Container maxW="5xl">
        {/* Section title */}
        <VStack textAlign="center" mb={16} spacing={4}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, brand.400, accent.400)"
            bgClip="text"
            textColor="transparent"
          >
            {data.contact.title}
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300" maxW="3xl">
            {data.contact.description}
          </Text>
        </VStack>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12}>
          {/* Contact Info */}
          <VStack spacing={8} align="stretch">
            <ContactInfoCard
              icon={<Mail size={24} />}
              title="Email"
              value={data.personal.email}
              href={`mailto:${data.personal.email}`}
            />
            <ContactInfoCard
              icon={<Phone size={24} />}
              title="Phone"
              value={data.personal.phone}
              href={`tel:${data.personal.phone}`}
            />
            <ContactInfoCard
              icon={<MapPin size={24} />}
              title="Location"
              value={data.personal.location}
              href="#"
            />

            {/* Social Links */}
            <VStack align="start" spacing={4} pt={4}>
              <Heading size="md" color="white">
                Connect With Me
              </Heading>
              <HStack spacing={4}>
                {data.contact.socialLinks.map((link, index) => (
                  <Box
                    as={Link}
                    key={index}
                    href={link.url}
                    isExternal
                    p={4}
                    bg="gray.800"
                    borderRadius="full"
                    color="brand.400"
                    _hover={{ bg: 'gray.700', transform: 'scale(1.1)', transition: 'all 0.3s' }}
                    aria-label={link.platform}
                  >
                    {iconMap[link.icon] || <Mail size={24} />}
                  </Box>
                ))}
              </HStack>
            </VStack>
          </VStack>

          {/* Contact Form */}
          <Box bg="gray.800" p={8} borderRadius="lg">
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                {/* Name */}
                <FormControl>
                  <FormLabel color="white" fontWeight="semibold">
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #3b82f6' }}
                  />
                </FormControl>

                {/* Email */}
                <FormControl>
                  <FormLabel color="white" fontWeight="semibold">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #3b82f6' }}
                  />
                </FormControl>

                {/* Message */}
                <FormControl>
                  <FormLabel color="white" fontWeight="semibold">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #3b82f6' }}
                    resize="none"
                  />
                </FormControl>

                {/* Submit Button */}
                <Button
                  type="submit"
                  width="full"
                  colorScheme="brand"
                  size="lg"
                  fontWeight="bold"
                  _hover={{ boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)' }}
                >
                  Send Message
                </Button>

                {/* Success Message */}
                {submitted && (
                  <Alert status="success" borderRadius="lg" bg="green.500/20" borderColor="green.500/50">
                    <AlertIcon color="green.300" />
                    <Text color="green.300">Thank you! I'll get back to you soon.</Text>
                  </Alert>
                )}
              </VStack>
            </form>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
