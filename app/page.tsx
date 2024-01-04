import React from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'

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
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box bg="gray.700" textAlign={"center"}>
          <Header/>
      <SubHeader curr_month={currentMonth}/>
      </Box>
  );
} 

export default HomePage;