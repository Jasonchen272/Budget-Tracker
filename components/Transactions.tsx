import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
import TransactionList from './TransactionList';

interface TransactionList{
  transactionList: TransactionList;
}
type Transactions = {
    amount: number;
    category: string;
  };
  
interface TransactionProps {
  category: string;
  amount: number;
  deleteTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

function Transactions( {category, amount, deleteTransaction }: TransactionProps) {
  let imageSrc = `${category}.png`;
  if(category !== "food" && category !== "entertainment" && category !== "shopping"){
    imageSrc = 'other.png'
  }
  return (
    <HStack p={2} color="black" alignContent={"center"}>
      <img src = {imageSrc} alt = {category} width = "2%"></img>
      <Text>{category} ${amount}</Text>
      <Button onClick={deleteTransaction}>Delete</Button>
    </HStack>
  );
}

export default Transactions;
