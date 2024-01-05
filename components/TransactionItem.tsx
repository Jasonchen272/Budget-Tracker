import React from 'react';
import { Box, Heading, Link, Flex } from '@chakra-ui/react';
import Transactions from './Transactions';


interface TransactionItemProps {
    transaction: Transaction;
}
  
  

function TransactionItem({transaction}:TransactionItemProps) {
  return (
    <Box>
    <li>    
        {/* list of transactions */}
      <Transactions category = {transaction.category} amount = {transaction.amount}></Transactions>
    </li>
  </Box>
  );
}

export default TransactionItem;