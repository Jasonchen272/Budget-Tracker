import React, {useState} from 'react';
import TransactionItem from './TransactionItem';

import { Box, Heading, Link, Flex,Text } from '@chakra-ui/react';
type Transactions = {
  amount: number;
  category: string;
};

interface TransactionListProps {
  transactions: Transactions[];
  deleteTransaction: (index: number) => void;
}
  

function TransactionList({transactions, deleteTransaction}:TransactionListProps) {
  return (
    <Box>
    <Text color = "white">Transactions</Text>
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} index={index} transaction={transaction} deleteTransaction={deleteTransaction}/>
      ))}
    </ul>
  </Box>
  );
}

export default TransactionList;