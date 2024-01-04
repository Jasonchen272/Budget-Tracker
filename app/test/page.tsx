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
  Container,
} from '@chakra-ui/react';

function HomePage() {
  return (
    <Box textAlign={"center"}>
          <Header/>
      <Link href="../">Home</Link>
      </Box>
  );
}

export default HomePage;