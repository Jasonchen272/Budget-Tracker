import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

function Header() {
  return (
    <Box p={4} color="gray.500">
        <Heading as="h1" fontSize="50" fontWeight={600}> 
          BUDGET TRACKER
        </Heading>
    </Box>
  );
}

export default Header;
