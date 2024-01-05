'use client';
import React, {useState} from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox, VStack } from '@chakra-ui/react';

interface Transaction {
    category: string;
    amount: number;
  }
  interface TransactionFormProps {
    addTransaction: (transaction: Transaction) => void;
  }
  

function TransactionAdder({ addTransaction }: TransactionFormProps) {
    const [cat, setCat] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const newTransaction = () => {
        addTransaction({ category:cat, amount: parseFloat(amount) });
        const updatedTransactions = [...transactions, { category: cat, amount: parseFloat(amount) || 0 }];
        setTransactions(updatedTransactions);

      };
    const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCat(e.target.value)
    }
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setAmount(e.target.value)
        e.target.value = '0';
    }

  return (
    <Flex justify="space-between">
      <HStack mr = {50}>
        <Select placeholder = {"Select Catagory"}defaultValue={"other"} id = "userCategory"  onChange={(e) => handleCat(e)} value = {cat} bgColor = "white">
          <option value='food'>food</option>
          <option value='entertainment'>entertainment</option> 
          <option value='shopping'>shopping</option>
          <option value='other'>other</option>
        </Select>
        <NumberInput onBlur={(e) => handleAmount(e)}  >
          <NumberInputField placeholder='Cost'></NumberInputField>
        </NumberInput>
        <button onClick = {newTransaction}>Add</button >

      </HStack>
      </Flex>
  );
}

export default TransactionAdder;
