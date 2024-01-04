import React from 'react';
import { Box, Heading,Text, Link, Flex, HStack } from '@chakra-ui/react';


interface TransactionProps {
  category: string;
  amount: number;
}
function Transactions( {category, amount }: TransactionProps) {
    let imageSrc = `${category}.png`;
    if(category !== "food" && category !== "entertainment" && category !== "shopping"){
        imageSrc = 'other.png'
    }
  return (
    
    <HStack p={2} color="black" alignContent={"center"}>
        <img src = {imageSrc} alt = {category} width = "2%"></img>
        <Text>{category} ${amount}</Text>
    </HStack>
  );
}

export default Transactions;
