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
  Select,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import Transactions from '@/components/Transactions';
import TransactionAdder from '@/components/TransactionAdder';
function HomePage() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box bg="gray.700" textAlign={"center"}>
          <Header/>
    <SubHeader curr_month={currentMonth} total={0}/>
    <Box textAlign={"center"}>
      <TransactionAdder></TransactionAdder>
      <Transactions category={"food"} amount = {55}></Transactions>
      <Transactions category={"entertainment"} amount = {20}></Transactions>
      <Transactions category={"albfewfa"} amount={23}></Transactions>
      <Transactions category={"shopping"} amount={43}></Transactions>
      </Box>
    </Box>
  );
} 

export default HomePage;