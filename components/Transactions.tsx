import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
import TransactionList from './TransactionList';

interface TransactionList{
  transactionList: TransactionList;
}

interface TransactionProps {
  category: string;
  amount: number;
}
function Transactions( {category, amount }: TransactionProps, transactionList: TransactionList) {
    let imageSrc = `${category}.png`;
    if(category !== "food" && category !== "entertainment" && category !== "shopping"){
        imageSrc = 'other.png'
    }
    console.log("fr")
    console.log(transactionList)
  return (
    
    <HStack p={2} color="black" alignContent={"center"}>
        <img src = {imageSrc} alt = {category} width = "2%"></img>
        <Text>{category} ${amount}</Text>
        <Button>Delete</Button>
    </HStack>
  );
}

export default Transactions;
