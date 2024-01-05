import React, {useState} from 'react';
import Transactions from './Transactions';
import TransactionItem from './TransactionItem';

import { Box, Heading, Link, Flex,Text } from '@chakra-ui/react';


  interface TransactionListProps {
    transactions: Transactions[];
  }
  

function TransactionList({transactions}:TransactionListProps) {
  return (
    <Box>
    <Text color = "white">Transactions</Text>
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} transactions={transactions} />
      ))}
    </ul>
  </Box>
  );
}

export default TransactionList;