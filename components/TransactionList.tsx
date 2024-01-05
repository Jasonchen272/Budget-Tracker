import React, {useState} from 'react';
import TransactionItem from './TransactionItem';

import { Box, Heading, Link, Flex,Text } from '@chakra-ui/react';
type Transactions = {
  amount: number;
  category: string;
};

interface TransactionListProps {
  transactions: Transactions[];
}
  

function TransactionList({transactions}:TransactionListProps) {
  return (
    <Box>
    <Text color = "white">Transactions</Text>
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction}/>
      ))}
    </ul>
  </Box>
  );
}

export default TransactionList;