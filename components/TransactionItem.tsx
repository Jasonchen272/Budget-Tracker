import React from 'react';
import { Box, Heading, Link, Flex } from '@chakra-ui/react';
import Transactions from './Transactions';


interface Transaction {
  category: string;
  amount: number;
}

interface TransactionItemProps {
    index: number;
    transaction: Transaction;
    deleteTransaction: (index: number) => void;
}

function TransactionItem({index, transaction, deleteTransaction }:TransactionItemProps) {
  return (
    <Box>
      <li>    
        <Transactions category = {transaction.category} amount = {transaction.amount}  deleteTransaction={() => deleteTransaction(index)}></Transactions>
      </li>
    </Box>
  );
}

export default TransactionItem;