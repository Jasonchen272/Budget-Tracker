'use client';
import React, {useState} from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox, VStack } from '@chakra-ui/react';
import Transactions from './Transactions';

interface Transaction {
    category: string;
    amount: number;
  }

function TransactionAdder() {
    const [cat, setCat] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const newTransaction = (e) => {
        const updatedTransactions = [...transactions, { category: cat, amount: parseFloat(amount) || 0 }];
        setTransactions(updatedTransactions);
        console.log(updatedTransactions)

      };
    const handleCat = (e) => {
        e.preventDefault();
        setCat(e.target.value)
    }
    const handleAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
        e.target.value = 0;
    }
  return (
    <Flex justify="space-between">
      <HStack mr = {50}>
        <Select id = "userCategory"  onChange={(e) => handleCat(e)} value = {cat}>
          <option value='food'>food</option>
          <option value='entertainment'>entertainment</option> 
          <option value='shopping'>shopping</option>
          <option value='other'>other</option>
        </Select>
        <NumberInput defaultValue={0} onBlur={(e) => handleAmount(e)} >
          <NumberInputField />
        </NumberInput>
        <button onClick = {newTransaction}>Add</button>

      </HStack>
      <VStack>
      {transactions.map((transaction, index) => (
            <Transactions category = {transaction.category} amount = {transaction.amount}></Transactions>
            ))}
      </VStack>
      </Flex>
  );
}

export default TransactionAdder;
