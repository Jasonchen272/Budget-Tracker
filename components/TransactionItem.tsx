import React from 'react';
import { Box, Heading, Link, Flex } from '@chakra-ui/react';
import Transactions from './Transactions';


interface Transaction {
  category: string;
  amount: number;
  date: string;
}

interface TransactionItemProps {
  index: number;
  transaction: Transaction;
  deleteTransaction: (index: number) => void;
  display:boolean
}

function TransactionItem({index, transaction, deleteTransaction,display }:TransactionItemProps) {//a list of the transactions to be displayed
  return (
    <Box
    display = {(display) ? 'block' : 'none'}>
      <li>
        <Transactions category = {transaction.category} amount = {transaction.amount}  date={transaction.date} deleteTransaction={() => deleteTransaction(index)}></Transactions>
      </li>
    </Box>
  );
}

export default TransactionItem;