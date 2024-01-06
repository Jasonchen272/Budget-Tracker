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
  if(category !== "Food" && category !== "Entertainment" && category !== "Shopping"){   //if it is not a given category then it is other.png
    imageSrc = 'other.png'
  }
  return (
    <Flex alignContent={"center"}>
      <HStack w="20%" color="black" mr={0}>
        <img src = {imageSrc} alt = {category} width = "60px"></img>
        <Text>{category} ${amount}</Text>
      </HStack>
      <Button margin={'auto'} ml={0} onClick={deleteTransaction}>Delete</Button>
    </Flex>
  );
}

export default Transactions;
