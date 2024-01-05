'use client';
import React, {useState} from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox } from '@chakra-ui/react';
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
        const newTransaction = { category: cat, amount: parseFloat(amount) || 0 };
        setTransactions([...transactions, newTransaction]);
        console.log(transactions)

        // Clear the form fields
        setCat('');
        setAmount('');
      };
    const handleCat = (e) => {
        e.preventDefault();
        setCat(e.target.value)
    }
    const handleAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
    }
  return (
    <Flex justify="space-between">
      <HStack mr = {50}>
        <Select id = "userCategory"  onChange={(e) => handleCat(e)}>
          <option value='food'>food</option>
          <option value='entertainment'>entertainment</option> 
          <option value='shopping'>shopping</option>
          <option value='other'>other</option>
        </Select>
        <NumberInput defaultValue={0} onBlur={(e) => handleAmount(e)}>
          <NumberInputField />
        </NumberInput>
        <button onClick = {newTransaction}>Add</button>
      </HStack>
      </Flex>
  );
}

export default TransactionAdder;
