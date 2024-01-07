import React from 'react';
import { Box, Heading, Link, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box p={4} color="gray.400">
        <Heading as="h1" fontSize="60" fontWeight={800}> 
          Budget Tracker
        </Heading>
    </Box>
  );
}

export default Header;
