'use client';
import React, {useState} from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/Subheader'
import Transactions from '@/components/Transactions';
import TransactionAdder from '@/components/TransactionAdder';
import TransactionList from '@/components/TransactionList';
import TrasactionAdder from '@/components/TransactionAdder'

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

interface Transaction {
  category: string;
  amount: number;
}


function HomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const deleteTransaction = (index: number) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box textAlign={"center"} bg="white">
      <Header/>
      <SubHeader curr_month={currentMonth} total={0}/>
      <Box textAlign={"center"}>
        <TransactionAdder addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </Box>
    </Box>
  );
} 

export default HomePage;