import React from 'react';
import { Box, Heading, Link, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg= "white" p={4} color="black">
        <Heading as="h1" fontSize="50"> 
        Budget Tracker
        </Heading>
    </Box>
  );
}

export default Header;
