import React from 'react';
import TransactionItem from './TransactionItem';

import { Box, Link, Flex,Text } from '@chakra-ui/react';
type Transactions = {
  amount: number;
  category: string;
  date: string
};

interface TransactionListProps {
  transactions: Transactions[];
  deleteTransaction: (index: number) => void;
}
  

function TransactionList({transactions, deleteTransaction}:TransactionListProps) { //converts the transaction array to a transactionItem list
  return (
    <Box 
      bg="gray.200"
      p={8}
      borderRadius="60px"
      boxShadow="lg"
      width="fit-content"
      height="fit-content"
      display = {(transactions.length == 0 ) ? "none": "block"}>
      <ul style={{ listStyle: 'none' , marginLeft: '30px', fontSize: '20px'}}>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} index={index} transaction={transaction} deleteTransaction={deleteTransaction}/>
        ))}
      </ul>
  </Box>
  );
}

export default TransactionList;