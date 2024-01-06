import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
import TransactionList from './TransactionList';

type Transactions = {
    amount: number;
    category: string;
  };
  
interface TransactionProps {
  category: string;
  amount: number;
  deleteTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

function Transactions( {category, amount, deleteTransaction }: TransactionProps) {// actual transaction that is displayed on screen
  let imageSrc = `${category}.png`; //matches picture with category
  if(category !== "food" && category !== "entertainment" && category !== "shopping"){   //if it is not a given category then it is other.png
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
