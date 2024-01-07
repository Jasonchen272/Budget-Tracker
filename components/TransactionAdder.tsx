'use client';
import React, {useState} from 'react';
import { Box, Heading, Link, Flex, HStack, Select, NumberInput, NumberInputField, Button, Checkbox, VStack } from '@chakra-ui/react';

interface Transaction {
  category: string;
  amount: number;
}
interface TransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
  changeTotal:(amount:number) => void;
  updatePieData: (amount: number, category: string) => void;
}
  

function TransactionAdder({ addTransaction, changeTotal, updatePieData }: TransactionFormProps) {
    const [cat, setCat] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const newTransaction = () => { 
        addTransaction({ category:cat, amount: amount }); // update the transaction list in page.tsx
        const updatedTransactions = [...transactions, { category: cat, amount: amount || 0 }];
        setTransactions(updatedTransactions); // update the transaction list
        changeTotal(amount); // updates the total spent
        updatePieData(amount, cat);

    };
    const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => { // set category
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
      <Flex alignItems={'center'} justifyContent={'center'}>
        <HStack mt={30}>
          <Select placeholder = {"Select Catagory"}defaultValue={"other"} id = "userCategory"  onChange={(e) => handleCat(e)} value = {cat} bgColor = "white">
            <option value='Food'>Food</option>
            <option value='Entertainment'>Entertainment</option> 
            <option value='Shopping'>Shopping</option>
            <option value='Other'>Other</option>
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
