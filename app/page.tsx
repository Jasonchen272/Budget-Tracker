import React from 'react';
import Header from '@/components/Header';

import {
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Text,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
function HomePage() {
  return (
    <Box textAlign={"center"}>
          <Header/>
      <Link href="/test">To test</Link>
      </Box>
  );
}

export default HomePage;