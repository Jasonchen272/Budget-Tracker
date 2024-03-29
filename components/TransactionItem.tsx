import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react';
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
}

function TransactionItem({index, transaction, deleteTransaction }:TransactionItemProps) {//a list of the transactions to be displayed
  return (
    <Box>
      <li>
        <Transactions index = {index} category = {transaction.category} amount = {transaction.amount}  date={transaction.date} deleteTransaction={() => deleteTransaction(index)}></Transactions>
      </li>
    </Box>
  );
}

export default TransactionItem;