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
  const [total, setTotal] = useState<number>(0);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const deleteTransaction = (index: number) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };
  const changeTotal = (amount:number) => {
    setTotal(total + amount)
  }
  console.log("pig")

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  return (
    <Box textAlign={"center"} bg="white">
      <Header/>
      <SubHeader curr_month={currentMonth} total={total}/>
      <Box textAlign={"center"}>
        <TransactionAdder addTransaction={addTransaction} updateTotal={changeTotal}/>
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
      </Box>
    </Box>
  );
} 

export default HomePage;