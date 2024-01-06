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
  

function TransactionList({transactions, deleteTransaction}:TransactionListProps) { //converts the transaction array to a transactionItem list
  return (
    <Box>
    <Text fontSize={30}mb={10} mt={30} color = "black">Transactions</Text>
    <ul style={{ listStyle: 'none' , marginLeft: '30px', fontSize: '20px'}}>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} index={index} transaction={transaction} deleteTransaction={deleteTransaction}/>
      ))}
    </ul>
  </Box>
  );
}

export default TransactionList;