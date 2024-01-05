import React, {useState} from 'react';
import Transactions from './Transactions';
import TransactionItem from './TransactionItem';

import { Box, Heading, Link, Flex } from '@chakra-ui/react';


  interface TransactionListProps {
    transactions: Transactions[];
  }
  

function TransactionList({transactions}:TransactionListProps) {
  return (
    <Box>
    <h2>Transactions</h2>
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </ul>
  </Box>
  );
}

export default TransactionList;