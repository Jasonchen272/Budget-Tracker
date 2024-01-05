import React from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'
import Transactions from '@/components/Transactions';
import TransactionAdder from '@/components/TransactionAdder';

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

function HomePage() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box textAlign={"center"}>
          <Header></Header>
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