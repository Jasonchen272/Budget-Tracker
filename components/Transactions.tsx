import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack, Button } from '@chakra-ui/react';
type Transactions = {
  amount: number;
  category: string;
};

interface TransactionProps {
  category: string;
  amount: number;
  deleteTransaction: React.MouseEventHandler<HTMLButtonElement>;
}
function Transactions( {category, amount }: TransactionProps, transactionList: Transactions[]) {
  const deleteTrans = () => {
    console.log("delete");
  }
    let imageSrc = `${category}.png`;
    if(category !== "food" && category !== "entertainment" && category !== "shopping"){
        imageSrc = 'other.png'
    }
  return (
    <HStack p={2} color="black" alignContent={"center"}>
        <img src = {imageSrc} alt = {category} width = "2%"></img>
        <Text>{category} ${amount}</Text>
        <Button onClick={deleteTrans}>Delete</Button>
    </HStack>
  );
}

export default Transactions;
