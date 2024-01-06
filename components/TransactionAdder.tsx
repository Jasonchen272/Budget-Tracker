'use client';
import React, {useState} from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox, VStack } from '@chakra-ui/react';

interface Transaction {
  category: string;
  amount: number;
}
interface TransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
  updateTotal:(amount:number) => void;
}
  

function TransactionAdder({ addTransaction,updateTotal }: TransactionFormProps) {
  
    const [cat, setCat] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const newTransaction = () => {
        addTransaction({ category:cat, amount: amount });
        const updatedTransactions = [...transactions, { category: cat, amount: amount || 0 }];
        setTransactions(updatedTransactions);
        updateTotal(amount);
    };
    const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCat(e.target.value)
    }
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(e.target.value == ''){
          setAmount(0);
        }
        else{
          setAmount(parseFloat(e.target.value))
        }
        e.target.value = '';
    }

    return (
      <Flex justify="space-between">
        <HStack mr = {50}>
          <Select placeholder = {"Select Catagory"}defaultValue={"other"} id = "userCategory"  onChange={(e) => handleCat(e)} value = {cat} bgColor = "white">
            <option value='food'>Food</option>
            <option value='entertainment'>Entertainment</option> 
            <option value='shopping'>Shopping</option>
            <option value='other'>Other</option>
          </Select>
          <NumberInput onBlur={(e) => handleAmount(e)}  >
            <NumberInputField placeholder='Cost'></NumberInputField>
          </NumberInput>
          <button onClick = {newTransaction}>Add</button>
       </HStack>
      </Flex>
    );
}

export default TransactionAdder;
